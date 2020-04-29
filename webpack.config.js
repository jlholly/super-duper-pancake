const HtmlWebPackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[hash].js'
  }
  module: {
    rules: [
      {

      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
}
