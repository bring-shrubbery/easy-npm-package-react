# Easy NPM Package setup for React

This package is a template you can use to create Node.js packages that are easily publishable to [NPM](https://npmjs.org/).

## Project Overview

This project includes following features:

- Fully configured TypeScript project for easy NPM publishing to both browser (ES5) and Node.js.
- Testing setup with Jest and React Testing Library.
- Github action to automatically publish the package when a release is created on your default branch.
- Github action to automatically test default branch or a new Pull Request.
- Linting/Formatting configuration with Eslint/Prettier via Google's GTS.
- Husky setup to prevent committing with failed tests.

## Getting started

To get started just click on the `"Use this template" on this repo or just clone it. Change the `package.json` info to match your information, add your source code and you're all set!

To have package automatically deployed on new release just add `npm_token` env variable to your Github repository.

## Details on double configuration

If you look at the `package.json` file you'll notice that there are two `compile` npm scripts. This is done to compile for the ES5 (browser) and CommonJS (Node.js) separately. `main` and `module` properties of `package.json` are responsible for loading these separate versions depending on the project setup. In Node.js project files from `main` will be loaded, and in ES modules compatible project files from `module` will be loaded. This way the project remains compatible with the widest amount of configurations.

There are also two `tsconfig.json` files. The configuration for CommonJS (`tsconfig.cjs.json`) is just extending the one for ES modules (`tsconfig.esm.json`), so if you want to change the configuration you just need to change the latter one to change both configs.

## Contributors

- [Antoni Silvestrovic (author)](https://github.com/bring-shrubbery)

## License

[MIT](https://github.com/bring-shrubbery/easy-npm-package-react/blob/main/LICENSE)
