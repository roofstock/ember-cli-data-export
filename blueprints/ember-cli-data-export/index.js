module.exports = {

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },


  afterInstall: function(options) {
     return this.addBowerPackagesToProject([
       { name: "file-saver" },
       { name: 'js-xlsx', target: '~0.8.0'}
     ]);
   }
};
