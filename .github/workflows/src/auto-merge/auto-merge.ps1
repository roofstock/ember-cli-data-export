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
    $pullRequestUrl=(& gh pr create -B $DestinationBranch -H $SourceBranch --title "$title" --body "$body")
    $createPullRequestExitCode = $LASTEXITCODE
    if ($createPullRequestExitCode -eq 0)
    {
        Write-Host "Created pullRequestUrl=$pullRequestUrl"
        Write-Host "Merging $pullRequestUrl"
        $pullRequestMergeResult=(& gh pr merge $pullRequestUrl --merge)
        $pullRequestMergeResult = $LASTEXITCODE
        if ($pullRequestMergeResult -eq 0)
        {
            Write-Host "Pull Request merged"
        }
        else
        {
            Write-Host "Error merging $pullRequestUrl"
            throw "Error merging $pullRequestUrl"
        }
    }
    else
    {
        Write-Host "Error creating PR. Skipping..."
        exit
    }
}
else
{
    Write-Host "Destination branch ${DestinationBranch} not found. Skipping..."
    exit
}