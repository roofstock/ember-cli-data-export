/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-data-export',

  included: function(app) {
    app.import('vendor/Blob.js');
    app.import('bower_components/file-saver/FileSaver.js');
    app.import('bower_components/js-xlsx/dist/xlsx.js');
  }
};
