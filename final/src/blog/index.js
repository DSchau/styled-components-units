import slugify from 'slugify';
import format from 'date-fns/format';

import helloWorld, { meta as helloWorldMeta } from './05-06-2018-hello-world';

export default [
  { markdown: helloWorld, meta: helloWorldMeta }
]
  .map(({ markdown, meta }) => {
    return {
      markdown,
      meta: Object.assign({}, meta, {
        slug: `${format(meta.published, 'MM-DD-YYYY')}-${slugify(meta.title).toLowerCase()}`
      })
    };
  });

export const getPostBySlug = (slug, posts) => posts.find(({ meta }) => meta.slug === slug);
