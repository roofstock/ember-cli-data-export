import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const data = [
  ['Column 1', 'Column 2', 'Column 3'],
  ['foo', 'bar', 'baz'],
  ['foobar', 'barbar', 'bazbar']
];

export default Controller.extend({
  csv: service(),
  excel: service(),

  actions: {
    downloadCSV() {
      this.csv.export(data, {fileName: 'demo.csv'});
    },
    downloadXLSX() {
      this.excel.export(data, {sheetName: 'demo', fileName: 'demo.xlsx'});
    }
  }

});
