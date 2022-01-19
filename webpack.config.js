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
        assetModuleFilename: "images/[hash]/[ext][query]",
    },
};
