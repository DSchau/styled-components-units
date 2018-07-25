import express from 'express';
import path from 'path';

import { renderer } from './middleware';

const PORT = 3000;

const app = express();
const router = express.Router();

router.use('^/$', renderer);

router.use(express.static(path.resolve('build'), { maxAge: '30d' }));

router.use('*', renderer);

app.use(router);

app.listen(PORT, err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening on port: ${PORT}`);
});
