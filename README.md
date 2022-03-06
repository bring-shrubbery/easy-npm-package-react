# Easy NPM Package template for React

This package is a template you can use to create [NPM](https://npmjs.org/) packages that work well with the React library.

## Project Overview

This project includes following features:

- Ultra fast code bundling powered by [ESBuild](https://esbuild.github.io/) using [tsup](https://github.com/egoist/tsup).
- Turbo speed testing with [`@swc/jest`](), [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- Prettier for code formatting.
- ESLint for code linting.
- Husky for commit validation.
- Github action to automatically publish the package on every Github Release.
- Github action to automatically test default branch or a new Pull Request.
- Double build for CommonJS and ES Modules - to support all JavaScript environments.

## Getting started

### Cloning

To get started just click on the `"Use this template" on this repo or just clone it. Change the `package.json` info to match your information, add your source code and you're all set!

### Environment Variables

To have package automatically deployed on new release just add `npm_token` env variable to your Github repository.

## Contributors

- [Antoni Silvestrovic (author)](https://github.com/bring-shrubbery)

## License

[MIT](https://github.com/bring-shrubbery/easy-npm-package-react/blob/main/LICENSE)
