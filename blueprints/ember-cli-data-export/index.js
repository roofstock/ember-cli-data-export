module.exports = {

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

   afterInstall: function(options) {
     return this.addBowerPackageToProject("file-saver").then(function() {
       return this.addBowerPackageToProject("Blob");
     });
   }
};
