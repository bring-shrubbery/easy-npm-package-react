# 😌 Easy NPM Package template for React

This package is a template you can use to create [NPM](https://npmjs.org/) packages that work well with the React library.

## Project Overview

This project includes following features:

- 🚀 Ultra fast code bundling powered by [ESBuild](https://esbuild.github.io/) using [tsup](https://github.com/egoist/tsup).
- 🚀 Turbo speed testing with [`@swc/jest`](), [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- 💅 Prettier for code formatting.
- 💅 ESLint for code linting.
- 🥺 Husky for commit validation.
- 🚀 Github action to automatically publish the package on every Github Release.
- 🚀 Github action to automatically test default branch or a new Pull Request.
- 🚀 Double build for CommonJS and ES Modules - to support all JavaScript environments.

## Getting started

### `Use this template` button

The easiest way of getting started with this template is to use the `Use this template` button at the top of this page - then follow the steps to create your own repo from it.

### Degit

You can use [`degit`](https://github.com/Rich-Harris/degit) to clone this repo without the git history.

```bash
npx degit github:bring-shrubbery/easy-npm-package-react
```

### Adding source code and building

All your source code should go into `src` folder.
After you do that run `yarn build` and you'll have your code compiled into `dist` folder.
You can also run `yarn test` to test your code after you add your tests.

### Environment Variables

To have package automatically deployed on new release, add `npm_token` env variable to your Github repository.

## Support

Please consider following this project's author, Antoni Silvestrovič on [Github](https://github.com/bring-shrubbery) or [Bluesky](https://bsky.app/profile/bring-shrubbery.bsky.social), or by starring the project to show your ❤️ and support.

## License

[MIT](https://github.com/bring-shrubbery/easy-npm-package-react/blob/main/LICENSE)
