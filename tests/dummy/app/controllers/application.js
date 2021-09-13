import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

const data = [
  ['Column 1', 'Column 2', 'Column 3'],
  ['foo', 'bar', 'baz'],
  ['foo\r\nbar', 'bar, bar', '"bazbar"'],
];
const sheets = [
  {
    name: 'Demo',
    data,
  },
  {
    name: 'Extra Sheet',
    data: [
      ['Foo', 'Bar'],
      ['Baz', 'Foobar'],
    ],
  },
];

export default class ApplicationController extends Controller {
  @service csv;
  @service excel;

  @action downloadCSV() {
    this.csv.export(data, { fileName: 'demo.csv', autoQuote: true });
  }

  @action downloadXLSX() {
    this.excel.export(data, { sheetName: 'demo', fileName: 'demo.xlsx' });
  }

  @action downloadMultiSheetXLSX() {
    this.excel.export(sheets, { multiSheet: true, fileName: 'demo.xlsx' });
  }
}
