Param(
    [string]$SourceBranch = "main",
    [string]$DestinationBranch = "dev/Dev",
    [bool]$Verbose = $TRUE
)

#$ErrorActionPreference = "Stop"
$script:HasError = $FALSE;

echo "SourceBranch=$SourceBranch"
echo "DestinationBranch=$DestinationBranch"

$title="Merge $SourceBranch to $DestinationBranch"
$body="Merge $SourceBranch to $DestinationBranch"

# using this to check branch's existence requires "origin/" prefix
$destinationOriginBranch="origin/$DestinationBranch"
& git rev-parse --verify $destinationOriginBranch
$destinationBranchCheckExitCode = $LASTEXITCODE

if ($Verbose)
{
    Write-Host "Destination branch check: exit code=$destinationBranchCheckExitCode"
}

if ($destinationBranchCheckExitCode -eq 0)
{
    git config --global user.name "github-actions[bot]"
    git config --global user.email "github-actions[bot]@users.noreply.github.com"

    git fetch --all
    git checkout $DestinationBranch

    $sourceOriginBranch="origin/$SourceBranch"
    $mergeResult=(& git merge $sourceOriginBranch -m "$title" 2>&1)
    Write-Host "Merge result=$mergeResult"

    # Successful merge
    if ($mergeResult -match "Fast-forward" -or $mergeResult -match "Merge made") {
        git push origin $DestinationBranch
        Write-Host "Merge successful. Changes pushed to $DestinationBranch branch."
    }
    # No changes to merge, unlikely to happen
    elseif ($mergeResult -match "Already up to date") {
        git merge --abort
        Write-Host "No changes to merge. Skipping..."
    # Merge conflict or any other error, so we want to create a pr to resolve it
    } else {
        git merge --abort

        $pullRequestUrl=(& gh pr create -B $DestinationBranch -H $SourceBranch --title "$title" --body "$body")
        $createPullRequestExitCode = $LASTEXITCODE
        if ($createPullRequestExitCode -eq 0)
        {
            Write-Host "Created pullRequestUrl=$pullRequestUrl"
        }
        else
        {
            Write-Host "Error creating PR. Skipping..."
            exit
        }
    }
}
else
{
    Write-Host "Destination branch ${DestinationBranch} not found. Skipping..."
    exit
}