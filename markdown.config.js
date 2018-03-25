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
          const fullTitle = fs.readFileSync(path.join(base, unit, 'README.md'), 'utf8').split('\n').shift();
          const title = fullTitle.slice(fullTitle.indexOf('-') + 1).trim();
          return `- [${title}](${unit}/README.md)`;
        });

      return units.join('\n');
    }
  }
};
