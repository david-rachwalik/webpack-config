/* eslint-disable import/extensions */
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dev = require('./webpack.dev.js');

// https://webpack.js.org/configuration/output/#outputpublicpath
// 'devServer:publicPath' should match 'output:publicPath' (or breaks HMR)
// Optional and currently omitted because it doesn't fit use cases
module.exports = merge(dev, {
  devServer: {
    static: 'wwwroot', // wwwroot/ akin to dist/
    open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
    // watch mode enabled by default in 'webpack-dev-server' (https://webpack.js.org/configuration/watch)
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
