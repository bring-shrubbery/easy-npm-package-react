module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.esm.json',
    },
  },
};
