import Controller from '@ember/controller';

const data = [
  ['Column 1', 'Column 2', 'Column 3'],
  ['foo', 'bar', 'baz'],
  ['foobar', 'barbar', 'bazbar']
];

export default Controller.extend({
  actions: {
    downloadCSV() {
      this.csv.export(data, {fileName: 'demo.csv'});
    },
    downloadXLSX() {
      this.excel.export(data, {sheetName: 'demo', fileName: 'demo.xlsx'});
    }
  }

});
