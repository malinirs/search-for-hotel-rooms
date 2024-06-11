const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin');

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
  entry: './index.pug',
  output: {
    filename : filename('html'),
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: { directory: './src', },
    port: 4200,
    hot: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.pug'),
      filename: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: filename('css') }),
    new HTMLWebpackPlugin({
      filename: 'index.pug',
      minify: false
    }),
    new HTMLWebpackPugPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: cssLoaders() },
      { test: /\.(png|jpg|svg|gif)$/, type: 'asset/resource' },
      { test: /\.pug$/, loader: 'pug-loader', },
    ]
  }
}



// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;
// const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

// const cssLoaders = extra => {
//   const loaders = [MiniCssExtractPlugin.loader, 'css-loader']
//   if (extra) {
//     loaders.push(extra)
//   }
//   return loaders
// }

// module.exports = {
//   context: path.resolve(__dirname, 'src'),
//   entry: './index.js',
//   output: {
//     filename : filename('js'),
//     path: path.resolve(__dirname, 'dist')
//   },
//   devServer: {
//     static: { directory: './src', },
//     port: 4200,
//     hot: isDev
//   },
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: path.join(__dirname, 'src', 'index.pug'),
//       filename: './index.html'
//     }),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin({ filename: filename('css') })
//   ],
//   module: {
//     rules: [
//       { test: /\.css$/, use: cssLoaders() },
//       { test: /\.(png|jpg|svg|gif)$/, type: 'asset/resource' },
//       { test: /\.pug$/, loader: 'pug-loader', },
//     ]
//   }
// }