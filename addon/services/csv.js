import Service from '@ember/service';
import optionize from '../utils/utils';

const defaultConfig = {
  fileName: 'export.csv',
  separator: ',',
  withSeparator: true,
};

export default class Csv extends Service {
  export(data, options) {
    options = optionize(options, defaultConfig);

    var csv = this.jsonToCsv(data, options);

    saveAs(new Blob([csv], { type: 'data:text/csv;charset=utf-8' }), options.fileName);
  }

  jsonToCsv(objArray, options) {
    var array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';
    var value;

    if (options.withSeparator) {
      // add separator identifier;
      str += `sep=${options.separator}\r\n`;
    }

    // add heading row
    var head = array[0];
    for (var i = 0; i < head.length; i++) {
      value = head[i] + '';
      if (i > 0) {
        line += options.separator;
      }
      line += '"' + value.replace(/"/g, '""') + '"';
    }

    str += line + '\r\n';

    // add items
    for (i = 1; i < array.length; i++) {
      line = '';

      for (var index = 0; index < array[i].length; index++) {
        value = array[i][index];

        if (index > 0) {
          line += options.separator;
        }
        if (typeof value === 'object') {
          if (value) {
            var resolveValue;
            if (value._d instanceof Date) {
              // dealing with encoding issue in IE browsers.
              resolveValue =
                value._d.getMonth() + 1 + '/' + value._d.getDate() + '/' + value._d.getFullYear();
            } else {
              resolveValue = value._d.toString();
            }

            line += '"' + resolveValue.replace(/"/g, '""') + '"';
          } else {
            line += '""';
          }
        } else {
          value = value + '';
          if (value && value !== 'undefined') {
            line += '"' + value.replace(/"/g, '""') + '"';
          } else {
            line += '""';
          }
        }
      }

      str += line + '\r\n';
    }
    return str;
  }
}
