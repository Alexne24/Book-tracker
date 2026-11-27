export default {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^@book-tracker/ui-library$': '<rootDir>/../ui-library/src/index.ts'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom']
}