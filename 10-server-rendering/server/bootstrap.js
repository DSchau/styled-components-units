const register = require('ignore-styles').default;
const path = require('path');
const fs = require('fs');

const manifest = require(path.resolve('build/asset-manifest.json'));

register(undefined, (module, filename) => {
  const images = [/jpe?g/, /png/, /gif/];
  if (images.some(expr => expr.test(filename))) {
    const ext = filename.split('.').pop();
    const file = path.basename(filename);
    const asset = manifest[Object.keys(manifest).find(key => key.includes(file))];
    module.exports = `/${asset}`;
  }
});

require('babel-register')({
  ignore: [/node_modules/],
  presets: ['babel-preset-env', 'babel-preset-react-app']
});

require('./index');
