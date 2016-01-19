module.exports = {
  description: 'Installs the underlying xlsx component using bower',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies


  afterInstall: function() {
     return this.addBowerPackagesToProject([
       { name: "file-saver" },
       { name: 'js-xlsx', target: '~0.8.0'}
     ]);
   }
};
