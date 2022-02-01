const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// https://webpack.js.org/configuration/#options
module.exports = {
  context: __dirname,
  entry: {
    main: 'src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot'), // wwwroot/ akin to dist/
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    // https://www.npmjs.com/package/html-webpack-plugin
    // 'chunks' (include [name]) | 'excludeChunks' (exclude [name])
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/tree/main/examples/babel-loader
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ],
  module: {
    rules: [
      // IMAGES: https://webpack.js.org/guides/asset-modules
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      // FONTS: Inject in bundle rather than emitting separate files
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      // SCSS/SASS/CSS
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          // https://www.npmjs.com/package/mini-css-extract-plugin
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // https://webpack.js.org/loaders/css-loader (2 => postcss-loader, sass-loader)
          { loader: 'css-loader', options: { importLoaders: 2 } },
          // https://webpack.js.org/loaders/postcss-loader
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv()],
              },
            },
          },
          // https://webpack.js.org/loaders/sass-loader
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    // https://blog.johnnyreilly.com/2018/08/21/typescript-webpack-alias-goodbye-relative-paths
    plugins: [new TsconfigPathsPlugin()],
  },
};
