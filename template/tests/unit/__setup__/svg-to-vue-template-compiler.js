const compiler = require('vue-template-compiler');

module.exports = {
  process(src) {
    const compiled = compiler.compile(src);
    return `
      module.exports = {
        render() {
          ${compiled.render}
        }
      };
    `;
  },
};
