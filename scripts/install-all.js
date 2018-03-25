const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const hasYarn = require('has-yarn');
const chalk = require('chalk');

const base = path.join(__dirname, '..');
const include = [/^unit-\d+/];

const units = fs.readdirSync(base).filter(fileOrDirectory => {
  return (
    fs.statSync(path.join(base, fileOrDirectory)).isDirectory() &&
    include.some(
      folderToInclude => folderToInclude.test(fileOrDirectory)
    )
  );
});

units.reduce((chain, unit) => {

}, Promise.resolve())
  .then(() => {
    console.log(chalk.green.bold(`Installed dependencies for all units`));
  });
