/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

module.exports = {
  plugins: [
    require('tailwindcss')(require('./tailwind.config.js')),
    require('autoprefixer')(),
    require('postcss-import')(),
  ],
};
