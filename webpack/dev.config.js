const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      // Move all node_modules into vendors chunk
      minChunks: module => /node_modules/.test(module.resource)
    })
  ]
};
