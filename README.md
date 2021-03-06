# webpack-config

## Webpack 5 Full Project Setup

> Tutorial created by **Swashbuckling with Code** ([Video guide](https://www.youtube.com/watch?v=TOb1c39m64A), [Repo](https://github.com/Jimmydalecleveland/webpack-starters/tree/react-full-project))

### Main Run Commands

- `npm run build`
- `npm start`

### Notable Steps & Commands

- Create the project folder
  - add README.md and .gitignore
  - initial push to GitHub project
- Initialize NPM (_package.json_) and install WebPack packages (with [dev server](https://github.com/webpack/webpack-dev-server))

  - `npm init -y`
  - `npm i -D webpack webpack-cli webpack-dev-server`

- Install [Babel](https://babeljs.io) packages (_transpiler for JavaScript_)

  - `npm i -D babel-loader @babel/core @babel/preset-env`

- Install CSS related packages ([css-loader](https://github.com/webpack-contrib/css-loader), [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin))

  - `npm i -D css-loader mini-css-extract-plugin`

    - 'mini-css-extract-plugin' will create resources for a final css file
    - 'style-loader' will inject styles directly into JS bundle

  - **webpack.config.js**: add entries in 'plugins' and 'module:rules'

    > '_mini-css-extract-plugin_' source maps only work with these '_devtool_' values: source-map, nosources-source-map, hidden-nosources-source-map, hidden-source-map

- Install [SASS](https://www.w3schools.com/sass/default.php) (dart) packages

  - `npm i -D sass sass-loader`
  - update 'module:rules' (_webpack.config.js_) and import statements

- Install [PostCSS](https://postcss.org) packages (_transpiler for CSS_)

  - `npm i -D postcss postcss-preset-env postcss-loader`
  - add postcss.config.js to use postcss-preset-env
  - (_optional_) add .browserslistrc to project to target older browsers

---

- Install [React](https://reactjs.org) packages

  - `npm i react react-dom`
  - `npm i -D @babel/preset-react`
  - _webpack.config.js_: update 'module:rules' & 'resolve:extensions' (target .jsx too)
  - create JSX files as needed and update import statements

- Update _webpack.config.js_ to support images

  - 'module:rules' (type: asset) for image extensions
  - options:publicPath provided to MiniCssExtractPlugin.loader
  - specify image directory using output:assetModuleFilename

- Install HTML packages

  - `npm i -D html-webpack-plugin`
  - _webpack.config.js_: 'plugins' added; 'template' path provided
  - (optional) 'clean' command of "rm -rf dist" or "rmdir dist /s /q" added to _package.json_

- [Automatic clean-up](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder) of output directory (CleanWebpackPlugin deprecated)

  - ~~`npm i -D clean-webpack-plugin`~~
  - ~~_webpack.config.js_: 'plugins' added; 'output:path' must be provided~~
  - _webpack.config.js_: enable 'output:clear'

- Install [React Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) plugins (experimental) to support HMR for React development

  - `npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh`
  - (_optional_) can always add **// @refresh reset** to top of .jsx to opt into state wipe
  - _babel.config.js_: add entries in 'plugins' for development
  - _webpack.config.js_: 'plugins' added; 'entry' must be provided (even if default value)

---

- Separate webpack [configuration per environment](https://webpack.js.org/guides/production) [development, production]

  - `npm i -D webpack-merge`
  - _package.json_: update 'scripts' commands to use **--config webpack.\*.js**

  > **NOTE**: all sections are unified (including complex objects & lists; e.g. module:rules)

- Install [TypeScript](https://webpack.js.org/guides/typescript) packages with [ESLint](https://eslint.org) & Prettier ([guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb))

  - `npm i -D typescript @babel/preset-typescript fork-ts-checker-webpack-plugin`
  - `npm i -D @types/webpack @types/react-dom`

  > **NOTE**: 'ts-loader' is redundant with 'babel-loader'; @types/react is included with @types/react-dom

  - `npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react`
  - `npm i -D prettier eslint-plugin-prettier eslint-config-prettier`
  - _tsconfig.json_ added for TypeScript configuration
  - _.eslintrc.cjs_ & _.prettierrc.cjs_ configurations added
  - _webpack.config.js_: 'module:rules' added for .tsx | .ts files

  > **NOTE**: advantage of Prettier rules setup is that code can automatically be fixed using ESLint's --fix option

## Reference Links

- WebPack Concepts: [Configuration](https://webpack.js.org/concepts/configuration)
- WebPack Guides: [TypeScript](https://webpack.js.org/guides/typescript), [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement), [publicPath](https://webpack.js.org/guides/public-path) ([what it does](https://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do))
