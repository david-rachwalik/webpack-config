module.exports = {
    // https://webpack.js.org/configuration/mode
    mode: "development",
    devtool: "eval-source-map", // https://webpack.js.org/configuration/devtool
    devServer: {
        static: "./dist",
    },
};
