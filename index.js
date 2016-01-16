/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-data-export',

  included: function(app) {
    this._super.included(app);
    this.app.import('vendor/Blob.js');
    this.app.import(app.bowerDirectory + '/file-saver/FileSaver.js');
  }
};
