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
  entry: {},
  // entry: './index.js',
  output: {
    filename : filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: { directory: './src', },
    port: 4200,
    hot: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './index.pug' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: filename('css') }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: cssLoaders() },
      { test: /\.(png|jpg|svg|gif)$/, type: 'asset/resource' },
      { test: /\.pug$/, loader: 'pug-loader', },
      { test: /\.s[ac]ss$/, use: cssLoaders('sass-loader') },
    ]
  }
}




// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin');


// var template = require("./file.pug");
// var html = require("apply-loader!pug-loader!./file.pug");


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
//   // entry: './index.pug',
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
//       template: path.join(__dirname, 'src', 'index.html'),
//       filename: './index.html'
//     }),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin({ filename: filename('css') }),
//     new HTMLWebpackPugPlugin({ template: './src/index.pug' }),
//   ],
//   module: {
//     rules: [
//       { test: /\.css$/, use: cssLoaders() },
//       { test: /\.(png|jpg|svg|gif)$/, type: 'asset/resource' },
//       { test: /\.pug$/, loader: 'pug-loader', },
//       { test: /\.s[ac]ss$/, use: cssLoaders('sass-loader') },
//     ]
//   }
// }



// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin');

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
//   // entry: './index.pug',
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
//       template: path.join(__dirname, 'src', 'index.html'),
//       filename: './index.html'
//     }),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin({ filename: filename('css') }),
//     new HTMLWebpackPugPlugin({ template: './src/index.pug' }),
//   ],
//   module: {
//     rules: [
//       { test: /\.css$/, use: cssLoaders() },
//       { test: /\.(png|jpg|svg|gif)$/, type: 'asset/resource' },
//       { test: /\.pug$/, loader: 'pug-loader', },
//       { test: /\.s[ac]ss$/, use: cssLoaders('sass-loader') },
//     ]
//   }
// }