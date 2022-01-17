const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development", // https://webpack.js.org/configuration/mode
    // devtool: "eval-source-map", // https://webpack.js.org/configuration/devtool
    devtool: "source-map", // https://webpack.js.org/configuration/devtool
    devServer: {
        static: "./dist",
        hot: true,
    },
    plugins: [new MiniCssExtractPlugin()], // https://github.com/webpack-contrib/mini-css-extract-plugin#getting-started
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                // use: ["style-loader", "css-loader"],
                // WebPack reads arrays right-to-left
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
        ],
    },
};
