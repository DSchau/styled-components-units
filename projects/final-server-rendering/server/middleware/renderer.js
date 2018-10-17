import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import path from 'path';
import fs from 'fs-extra';
import cheerio from 'cheerio';

import App from '../../src/screens/App';

export const renderer = async (req, res) => {
  const filePath = path.resolve(__dirname, '../../build/index.html');

  try {
    const htmlTemplate = await fs.readFile(filePath, 'utf8');

    const $ = cheerio.load(htmlTemplate);

    const context = {};
    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </StyleSheetManager>
    );

    const styles = sheet.getStyleTags();

    if (context.url) {
      return res.redirect(301, context.url);
    }

    $('head').append(styles);
    $('#root').html(html);

    return res.send($.html());
  } catch (e) {
    console.error(e.stack);
    return;
  }
};
