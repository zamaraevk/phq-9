const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/App.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    // lint your code
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/'
      }
    ],
    // compile your code
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      // react talking json
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
