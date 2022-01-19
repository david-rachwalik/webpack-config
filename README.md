# webpack-config

## Webpack 5 Full Project Setup

> Tutorial created by **Swashbuckling with Code** ([Video guide](https://www.youtube.com/watch?v=TOb1c39m64A), [Repo](https://github.com/Jimmydalecleveland/webpack-starters/tree/react-full-project))

### Main Run Commands

-   `npm run build`
-   `npm start`

### Notable Steps & Commands

-   Create the project folder
    -   add README.md and .gitignore
    -   initial push to GitHub project
-   Initialize NPM (_package.json_) and install WebPack packages (with [dev server](https://github.com/webpack/webpack-dev-server))

    -   `npm init -y`
    -   `npm i -D webpack webpack-cli webpack-dev-server`

-   Install [Babel](https://babeljs.io) packages (_transpiler for JavaScript_)

    -   `npm i -D babel-loader @babel/core @babel/preset-env`

-   Install CSS related packages ([css-loader](https://github.com/webpack-contrib/css-loader), [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin))

    -   `npm i -D css-loader mini-css-extract-plugin`

        -   'mini-css-extract-plugin' will create resources for a final css file
        -   'style-loader' will inject styles directly into JS bundle

    -   **webpack.config.js**: Add entries in 'plugins' and 'module:rules'

        > '_mini-css-extract-plugin_' source maps only work with these '_devtool_' values: source-map, nosources-source-map, hidden-nosources-source-map, hidden-source-map

-   Install [SASS](https://www.w3schools.com/sass/default.php) (dart) packages

    -   `npm i -D sass sass-loader`
    -   update 'module:rules' (_webpack.config.js_) and import statements

-   Install [PostCSS](https://postcss.org) packages (_transpiler for CSS_)

    -   `npm i -D postcss postcss-preset-env postcss-loader`
    -   add postcss.config.js to use postcss-preset-env
    -   (_optional_) add .browserslistrc to project to target older browsers

---

-   Install [React](https://reactjs.org) packages

    -   `npm i react react-dom`
    -   `npm i -D @babel/preset-react`
    -   _webpack.config.js_: update 'module:rules' & 'resolve:extensions' (target .jsx too)
    -   create JSX files as needed and update import statements

-   Update _webpack.config.js_ to support images

    -   'module:rules' (type: asset) for image extensions
    -   options:publicPath provided to MiniCssExtractPlugin.loader
    -   specify image directory using output:assetModuleFilename

---

-   Separate webpack [configuration per environment](https://webpack.js.org/guides/production) [development, production]

    -   `npm i -D webpack-merge`

## Reference Links

-   WebPack Concepts: [Configuration](https://webpack.js.org/concepts/configuration)
-   WebPack Guides: [TypeScript](https://webpack.js.org/guides/typescript), [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement)
