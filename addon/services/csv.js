import Ember from "ember";

export default Ember.Service.extend({

  exportAsCsv: function (data, fileName) {

    if (!fileName) {
      fileName = "export.csv";
    }

    function JSON2CSV(objArray) {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

      var str = '';
      var line = '';

      // add heading row
      var head = array[0];
      for (var i = 0; i < head.length; i++) {
        var line = '';
        var value = head[index] + "";
        line += '"' + value.replace(/"/g, '""') + '",';
      }

      str += line + '\r\n';

      // add items
      for (var i = 1; i < array.length; i++) {
        var line = '';

        for (var index in array[i]) {
          var value = array[i][index] + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }

        str += line + '\r\n';
      }
      return str;
    }

    var csv = JSON2CSV(data);

    saveAs(new Blob([csv],{type:"data:text/csv;charset=utf-8"}), fileName);

  }

});