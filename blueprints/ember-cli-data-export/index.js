module.exports = {

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

   afterInstall: function(options) {
     return this.addBowerPackagesToProject([
       {name: "file-saver", target: '1.20150507.2'},
       {name: 'js-xlsx', target: '~0.8.0'}
     ]);
   }
};
