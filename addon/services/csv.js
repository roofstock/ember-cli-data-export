import Ember from "ember";
import optionize from "../utils";

const defaultConfig = {
  fileName: 'export.csv'
}

export default Ember.Service.extend({

  export: function (data, options) {

    options = optionize(options, defaultConfig);

    function JSON2CSV(objArray) {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

      var str = '';
      var line = '';

      // add heading row
      var head = array[0];
      for (var i = 0; i < head.length; i++) {
        var value = head[i] + "";
        if (i > 0) {
          line += ',';
        }
        line += '"' + value.replace(/"/g, '""') + '"';
      }

      str += line + '\r\n';

      // add items
      for (var i = 1; i < array.length; i++) {
        var line = '';

        for (var index = 0; index < array[i].length; index++) {
          var value = array[i][index];

          if (index > 0) {
            line += ',';
          }
          if (typeof value === 'object') {
            if (value) {
              var resolveValue;
              if (value._d instanceof Date) {
                // dealing with encoding issue in IE browsers.
                resolveValue = (value._d.getMonth() + 1) + '/' + value._d.getDate()  + '/' + value._d.getFullYear();
              }
              else {
                resolveValue = value._d.toString();
              }

              line += '"' + resolveValue.replace(/"/g, '""') + '"';
            }
            else {
              line += '""';
            }
          }
          else {
            value = value + "";
            if (value && value != 'undefined') {
              line += '"' + value.replace(/"/g, '""') + '"';
            }
            else {
              line += '""';
            }
          }
        }

        str += line + '\r\n';
      }
      return str;
    }

    var csv = JSON2CSV(data);

    saveAs(new Blob([csv],{type:"data:text/csv;charset=utf-8"}), options.fileName);

  }

});
