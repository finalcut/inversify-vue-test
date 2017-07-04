const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'vendors': [
      'node_modules/reflect-metadata/Reflect.ts',
      'node_modules/material-design-lite/material.js'
    ],
    'basic-app/styles': 'src/basic-app/styles.scss',
    'basic-app/app': 'src/basic-app/index.ts',
    'time-tracker-app/styles': 'src/time-tracker-app/styles.scss',
    'time-tracker-app/app': 'src/time-tracker-app/index.ts'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
      chunks: [
        'vendors'
      ],
      showErrors: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'basic-app', 'index.html'),
      showErrors: false,
      filename: 'basic-app/index.html',
      chunks: [
        'vendors',
        'basic-app/styles',
        'basic-app/app'
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'time-tracker-app', 'index.html'),
      showErrors: false,
      filename: 'time-tracker-app/index.html',
      chunks: [
        'vendors',
        'time-tracker-app/styles',
        'time-tracker-app/app'
      ]
    }),
  ]
}