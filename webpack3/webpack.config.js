const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    mod1: path.resolve(__dirname, 'src/mod1.js'),
    mod2: path.resolve(__dirname, 'src/mod2.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  }
}
