module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', '@studiometa/eslint-config'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
          ['~', '.'],
        ],
        extensions: ['.js', '.mjs', '.json', '.vue'],
      },
    },
  },
};
