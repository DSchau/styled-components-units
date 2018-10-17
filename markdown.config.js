const path = require('path');
const fs = require('fs');
const stripIndent = require('strip-indent');

module.exports = {
  transforms: {
    INSTRUCTIONS(content, options, { originalPath } = {}) {
      const relative = path.relative(process.cwd(), originalPath);
      const [folder] = relative.split(path.basename(relative));
      return stripIndent(`
        ## 🚀 Getting Started

        This project is distributed as a monorepo utilizing [yarn workspaces][workspaces]

        As such, the best course of action is to navigate to the root of this repo, and simply type the following command:

        \`\`\`bash
        yarn
        \`\`\`

        This will install all the necessary dependencies and get you up and running with styled-components and React!

        Once dependencies are installed:

        1. \`cd ${folder}\`
        1. \`yarn start\` to start the local development server
        1. Make changes in \`src\`, and the project will automatically reload!

        ---

        ### 🤔 Alternative Approach

        [CodeSandbox][code-sandbox] is a great, online IDE that can simplify some of the pain of getting set up locally.

        [![Edit ${folder}](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/${folder})

        [workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/
        [code-sandbox]: https://codesandbox.io/

        ---
      `);
    },
    UNITS(content, options, { originalPath }) {
      const base = path.join(process.cwd(), 'projects');
      const folder = originalPath.split(path.basename(originalPath)).shift();
      const relative = path.relative(folder, base);
      const units = fs
        .readdirSync(base)
        .filter(fileOrDirectory =>
          fs.statSync(path.join(base, fileOrDirectory)).isDirectory()
        )
        .map(unit => {
          const [fullTitle] = fs
            .readFileSync(path.join(base, unit, 'README.md'), 'utf8')
            .split('\n');
          const title = fullTitle.slice(fullTitle.indexOf('#') + 1).trim();
          return `- [${title}](${path.join(relative, unit, 'README.md')})`;
        });

      return units.join('\n');
    }
  }
};
