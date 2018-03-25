const path = require('path');
const fs = require('fs');

module.exports = {
  transforms: {
    UNITS(content, options) {
      const expr = new RegExp(options.include);
      const base = path.resolve(options.base || __dirname);
      const units = fs.readdirSync(base)
        .filter(fileOrDirectory => fs.statSync(path.join(base, fileOrDirectory)).isDirectory() && expr.test(fileOrDirectory))
        .map(unit => {
          return `- [${unit}](${unit}/README.md)`;
        });

      return units.join('\n');
    }
  }
};
