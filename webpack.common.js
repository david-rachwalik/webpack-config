const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        assetModuleFilename: "images/[hash]/[ext][query]",
        clean: true,
    },
    // Series of fallbacks used to resolve import statements
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } }, "css-loader", "postcss-loader", "sass-loader"],
            },
        ],
    },
};
