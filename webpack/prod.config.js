const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true,
        except: ['$']
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        collapse_vars: true,
        reduce_vars: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      // Move all node_modules into vendors chunk
      minChunks: module => /node_modules/.test(module.resource)
    })
  ]
};
