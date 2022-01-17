# webpack-config

## [Webpack 5 Full Project Setup](https://www.youtube.com/watch?v=TOb1c39m64A) (Swashbuckling with Code)

### Main Run Commands

-   `npm run build`
-   `npm start`

### Notable Steps & Commands

-   Create the project folder with README.md
    -   .gitignore file
    -   initial push to GitHub project
-   Initialize NPM (package.json) and install WebPack packages

    -   `npm init -y`
    -   `npm i -D webpack webpack-cli webpack-dev-server`

-   Install CSS related packages ([css-loader](https://github.com/webpack-contrib/css-loader), [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin))

    -   `npm i -D css-loader mini-css-extract-plugin`

        -   'mini-css-extract-plugin' will create resources for a final css file
        -   'style-loader' will inject styles directly into JS bundle

    -   Add entries in 'plugins' and 'module:rules'

        > 'mini-css-extract-plugin' source maps only work with 'devtool' values: source-map, nosources-source-map, hidden-nosources-source-map, hidden-source-map
