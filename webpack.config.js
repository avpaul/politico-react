const path = require('path');
const Webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dest'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        // loader: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        loader: [MiniCSSExtractPlugin.loader, 'postcss-loader', 'css-loader'],
      },
      {
        test: [/\.png$/, /\.svg/, /\.jpe?g$/, /\.gif$/],
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new Webpack.NoEmitOnErrorsPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
    new Webpack.HotModuleReplacementPlugin({}),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    allowedHosts: ['.ngrok.io'],
    hot: true,
    historyApiFallback: true,
  },
};
