module.exports = {
  projects: [
    {
      displayName: 'Test',
      setupFiles: ['<rootDir>/test/__setup__/require-context.js'],
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
      moduleFileExtensions: ['js', 'vue'],
      testMatch: [
        '<rootDir>/components/**/*.vue',
        '<rootDir>/layouts/**/*.vue',
        '<rootDir>/pages/**/*.vue',
        '<rootDir>/middleware/**/*.js',
        '<rootDir>/plugins/**/*.js',
        '<rootDir>/store/**/*.js',
        '<rootDir>/test/**/*.js',
        '<rootDir>/utils/**/*.js',
      ],
    },
    {
      runner: 'jest-runner-stylelint',
      displayName: 'StyleLint',
      moduleFileExtensions: ['css', 'scss', 'vue'],
      testMatch: [
        '<rootDir>/components/**/*.vue',
        '<rootDir>/layouts/**/*.vue',
        '<rootDir>/pages/**/*.vue',
        '<rootDir>/assets/scss/**/*.scss',
      ],
    },
  ],
};
