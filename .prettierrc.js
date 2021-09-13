'use strict';

module.exports = {
  singleQuote: true,
  printWidth: 300,
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
