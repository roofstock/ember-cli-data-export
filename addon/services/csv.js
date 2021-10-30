import Service from '@ember/service';
import { saveAs } from 'file-saver';
import optionize from '../utils/utils';

const defaultConfig = {
  download: true,
  returnBlob: false,
  fileName: 'export.csv',
  raw: false,
  separator: ',',
  withSeparator: true,
  autoQuote: false,
};

const needsQuoteRE = /[",\r\n]/;

export default class CsvService extends Service {
  export(data, options) {
    options = optionize(options, defaultConfig);

    let csv = this.jsonToCsv(data, options);
    let output = new Blob([csv], { type: 'data:text/csv;charset=utf-8' });

    if (options.download) {
      saveAs(output, options.fileName);
    }
    if (options.returnBlob) {
      return output;
    }
  }

  jsonToCsv(objArray, options) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;

    let str = '';
    let line = '';
    let value;

    if (options.withSeparator) {
      // add separator identifier;
      str += `sep=${options.separator}\r\n`;
    }

    // add heading row
    let head = array[0];
    for (let i = 0; i < head.length; i++) {
      value = head[i] + '';
      if (i > 0) {
        line += options.separator;
      }
      line += this.quoteValue(value, options);
    }

    str += line + '\r\n';

    // add items
    for (let i = 1; i < array.length; i++) {
      line = '';

      for (let index = 0; index < array[i].length; index++) {
        value = array[i][index];

        if (index > 0) {
          line += options.separator;
        }
        if (typeof value === 'object') {
          if (value) {
            let resolveValue;
            if (value._d instanceof Date) {
              // dealing with encoding issue in IE browsers.
              resolveValue =
                value._d.getMonth() +
                1 +
                '/' +
                value._d.getDate() +
                '/' +
                value._d.getFullYear();
            } else {
              resolveValue = value._d.toString();
            }

            line += this.quoteValue(resolveValue, options);
          } else {
            line += this.quoteValue('', options);
          }
        } else {
          value = value + '';
          if (value && value !== 'undefined') {
            line += this.quoteValue(value, options);
          } else {
            line += this.quoteValue('', options);
          }
        }
      }

      str += line + '\r\n';
    }
    return str;
  }

  quoteValue(value, options) {
    switch (true) {
      case options.raw:
        return value;
      case options.autoQuote:
        if (value.match(needsQuoteRE)) {
          return this.doQuoteValue(value);
        }
        return value;
    }
    return this.doQuoteValue(value);
  }

  doQuoteValue(value) {
    return '"' + value.replace(/"/g, '""') + '"';
  }
}
