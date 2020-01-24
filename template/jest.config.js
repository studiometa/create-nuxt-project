module.exports = {
  projects: [
    {
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js',
      },
      moduleFileExtensions: ['js', 'vue', 'json'],
      transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
      },
      collectCoverage: true,
      collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'ESLint',
      testMatch: ['<rootDir>/**/*.vue', '<rootDir>/**/*.js', '!<rootDir>/dist'],
    },
    {
      runner: 'jest-runner-stylelint',
      displayName: 'StyleLint',
      moduleFileExtensions: ['css', 'scss', 'vue'],
      testMatch: ['<rootDir>/**/*.vue', '<rootDir>/**/*.scss', '!<rootDir>/dist'],
    },
  ],
};
