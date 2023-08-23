export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    ['./tests/setupTests.ts'],
  ],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/tests/mocks/fileMock.ts',

    '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/mocks/styleMock.ts',

    '(assets|models|services)': '<rootDir>/tests/mocks/fileMock.ts',
  },
  modulePaths: ['<rootDir>'],
}