const path = require('path');
const process = require('process');
const webpackMerge = require('webpack-merge');

const environment = process.env.NODE_ENV || 'development';

if (environment === 'development') {
  module.exports = webpackMerge.smart(
    require('./webpack/generic.config'),
    require('./webpack/entries.config'),
    require('./webpack/dev.config'),
    require('./webpack/build.config')
  );
} else {
  module.exports = webpackMerge.smart(
    require('./webpack/generic.config'),
    require('./webpack/entries.config'),
    require('./webpack/prod.config'),
    require('./webpack/build.config')
  );
}

