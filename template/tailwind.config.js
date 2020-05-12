const merge = require('lodash.merge');
const config = require('@studiometa/tailwind-config');

/**
 * TailwindCSS Configuration File
 *
 * @docs    https://tailwindcss.com/docs/configuration
 * @default https://github.com/studiometa/tailwind-config/blob/develop/src/index.js
 */
module.exports = merge(config, {
  // Extends the default Studio Meta Tailwind configuration here...
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'utils/**/*.js',
      'nuxt.config.js'
    ]
  }
});
