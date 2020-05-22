const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'scripts/[name].[chunkhash:5].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'onecolumn.html',
      template: './src/assets/onecolumn.html'
    }),
  ],
};
