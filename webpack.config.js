const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: ['./src/app.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
