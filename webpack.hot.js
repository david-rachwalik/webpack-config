const { merge } = require("webpack-merge");
const dev = require("./webpack.dev.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(dev, {
    devServer: {
        static: "./dist",
        hot: true,
        open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
        // watch mode enabled by default in 'webpack-dev-server' (https://webpack.js.org/configuration/watch)
    },
    plugins: [new ReactRefreshWebpackPlugin()],
});
