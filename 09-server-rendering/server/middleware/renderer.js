import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import path from 'path';
import fs from 'fs-extra';

import App from '../../src/screens/App';

export const renderer = async (req, res) => {
  const filePath = path.resolve(__dirname, '../../build/index.html');

  try {
    const htmlTemplate = await fs.readFile(filePath, 'utf8');

    const context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      return res.redirect(301, context.url);
    }

    return res.send(
      htmlTemplate.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
    );
  } catch (e) {
    console.error(e.stack);
    return;
  }
};
