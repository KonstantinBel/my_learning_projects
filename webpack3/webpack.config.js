const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    mod1: path.resolve(__dirname, 'src/mod1.js'),
    mod2: path.resolve(__dirname, 'src/mod2.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VueCarousel',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  }
}
