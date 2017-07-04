const path = require('path');

module.exports = {
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', 'dist'),
    inline: true,
    compress: true
  }
}