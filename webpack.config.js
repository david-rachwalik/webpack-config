const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development", // https://webpack.js.org/configuration/mode
    devtool: "source-map", // https://webpack.js.org/configuration/devtool
    devServer: {
        static: "./dist",
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
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
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
        ],
    },
    // Series of fallbacks used to resolve import statements
    resolve: {
        extensions: [".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash]/[ext][query]",
    },
};
