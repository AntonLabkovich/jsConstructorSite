"use strict";

var path = require('path');

var HTMLWbpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: "8888"
  },
  plugins: [new HTMLWbpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader'
      }]
    }]
  }
};