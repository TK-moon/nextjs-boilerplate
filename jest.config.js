const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/api/*',
    '!**/mocks/**',
    '!**/test/**',
    '!src/hooks/**',
    '!src/styles/**',
    '!src/**/*styles.{ts}',
    '!.storybook/**',
    '!src/**/*.stories.{ts,tsx}',
    '!src/pages/**/*.{ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTest.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
};

module.exports = createJestConfig(customJestConfig);
