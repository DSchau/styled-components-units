const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function webpackConfig({ environment }) {
  const options = [
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
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public/index.html')
        })
      ]
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
    );

  return merge.smart(options);
};
