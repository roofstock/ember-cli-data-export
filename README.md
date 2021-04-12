# ember-cli-data-export

Addon that encapsulates ability to render a data set as either excel or csv.

- `ember install @izea/ember-cli-data-export`

## Usage

- uses js-xlsx library for rendering excel content.
- automatically injects a service for both excel and csv format
- feed a datastructure that's an array of arrays, where each internal array is the set of data to be rendered for that row.
- Example: [['Title 1', 'Title 2', 'Title 3'],['row1cell1', 'row1cell2', 'row1cell3'],['row2cell1', 'row2cell2', 'row2cell3']]

## Example

```javascript
var data = [
  ['Title 1', 'Title 2', 'Title 3'],
  ['row1cell1', 'row1cell2', 'row1cell3'],
  ['row2cell1', 'row2cell2', 'row2cell3'],
];

if (type === 'Excel') {
  this.get('excel').export(data, { sheetName: 'sheet1', fileName: 'test.xlsx' });
} else if (type === 'CSV') {
  this.get('csv').export(data, { fileName: 'test.csv' });
}
```
