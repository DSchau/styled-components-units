const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function webpackConfig({ environment }) {
  return [
    {
      mode: 'production',
      devtool: 'source-map',
      target: 'web',
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin()]
    }
  ]
    .concat(
      environment === 'development'
        ? [require('./webpack.config.development')]
        : []
    )
    .concat(
      environment === 'production'
        ? [require('./webpack.config.production')]
        : []
    )
    .reduce((merged, config) => Object.assign(merged, config), {});
};
