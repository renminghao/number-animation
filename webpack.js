/* eslint-disable semi */
/* eslint-disable comma-dangle */
const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: process.cwd(),
  entry: {
    index: './lib/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), '/dist'),
    publicPath: '/static/',
    libraryTarget: 'umd',
    library: 'NumberAnimation'
  },
  externals: {},
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.ProgressPlugin((percentage, msg) => {
      const stream = process.stderr;
      if (stream.isTTY && percentage < 0.71) {
        stream.cursorTo(0);
        stream.write(`📦   ${msg}`);
        stream.clearLine(1);
      }
    })
  ]
}
