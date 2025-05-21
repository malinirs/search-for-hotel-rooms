const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/main.js', // точка входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // выходная папка
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader', 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true, // делает HTML читаемым
        },
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|ico|svg|xml|json|webmanifest)$/, // фавиконоки
        type: 'asset/resource',
        generator: {
          filename: 'assets/favicons/[name][ext]', // папка для фавиконок в dist
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/ui-kit.pug',
      filename: 'index.html', // имя выходного HTML файла
      inject: true, // вставляет bundle.js автоматически
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/favicons/site.webmanifest', to: 'assets/favicons/' }
      ]
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    hot: true, // HMR. Обновление части приложения без полной перезагрузки
    open: true, // автоматически открывает браузер
  },
};