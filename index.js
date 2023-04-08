/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-data-export',

  included(app) {
    this._super.included(app);
    app.import('vendor/Blob.js');
    app.import('vendor/FileSaver-1.3.3.js');
    app.import('vendor/jszip-0.10.8.js');
    app.import('vendor/xlsx-0.10.8.js');
  }
};
