module.exports = {
  displayName: 'Unit Test',
  testMatch: ['<rootDir>/tests/unit/**/*.spec.[jt]s?(x)'],
  setupFiles: ['<rootDir>/tests/unit/__setup__/require-context.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.svg$': '<rootDir>/tests/unit/__setup__/svg-to-vue-template-compiler.js',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/layouts/**/*.vue',
    '<rootDir>/utils/**/*.js',
  ],
};
