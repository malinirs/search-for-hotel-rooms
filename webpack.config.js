const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

const cssLoaders = extra => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader']
  if (extra) {
    loaders.push(extra)
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename : filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: filename('css') })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: cssLoaders() },
      { test: /\.(png|jpg|svg|gif)$/, type: 'asset/resource' },
    ]
  }
}