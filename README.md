# ember-spreadsheet-export

Addon that encapsulates ability to render a data set as either excel or csv.

Forked from [roofstock/ember-cli-data-export](https://github.com/roofstock/ember-cli-data-export).

#### Differences from `ember-cli-data-export` include:
- Dependencies have been updated to address various deprecations
- The undocumented `export-selector` and `export-selector-onselect` components have been removed, in order to remove
the dependency on `ember-select-list`, which hasn't been updated in a long time
- The `csv` and `excel` services are not automatically injected
- The dummy app now has content (a couple of buttons to generate demo files)


## Installation

 - ember install ember-spreadsheet-export

## Usage

 - uses js-xlsx library for rendering excel content.
 - automatically injects a service for both excel and csv format
 - feed a datastructure that's an array of arrays, where each internal array is the set of data to be rendered for that row.
 - Example: [['Title 1', 'Title 2', 'Title 3'],['row1cell1', 'row1cell2', 'row1cell3'],['row2cell1', 'row2cell2', 'row2cell3']]

## Example
 ```javascript
    // Don't forget to inject the service(s) as needed
    csv: service(),
    excel: service(),
    
    // Then go ahead and use it in your code
    let data = [
        ['Title 1', 'Title 2', 'Title 3'],
        ['row1cell1', 'row1cell2', 'row1cell3'],
        ['row2cell1', 'row2cell2', 'row2cell3']
    ];

    if (type === 'Excel') {
      this.excel.export(data, {sheetName: 'sheet1', fileName: 'test.xlsx'});
    } else if (type === 'CSV') {
      this.csv.export(data, {fileName: 'test.csv'});
    }
```
