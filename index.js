'use strict';

module.exports = {
  name: 'ember-spreadsheet-export',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/Blob.js');
  }
};
