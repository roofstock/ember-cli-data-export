module.exports = {
  description: 'Installs the underlying slider component using bower',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies


  afterInstall: function(options) {
     return this.addBowerPackagesToProject([
       { name: "file-saver" },
       { name: 'js-xlsx', target: '~0.8.0'}
     ]);
   }
};
