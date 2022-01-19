const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
    mode: "development", // https://webpack.js.org/configuration/mode
    devtool: "source-map", // https://webpack.js.org/configuration/devtool
    devServer: {
        static: "./dist",
        hot: true,
        open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
        // watch mode enabled by default in 'webpack-dev-server' (https://webpack.js.org/configuration/watch)
    },
    plugins: [new ReactRefreshWebpackPlugin()],
    module: {
        // Other rules are prepended from webpack.common.js
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // Since React 17+, able to opt into not needing to import React into JSX using runtime: "automatic"
                        presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
                        plugins: ["react-refresh/babel"],
                    },
                },
            },
        ],
    },
});
