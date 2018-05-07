import slugify from 'slugify';
import format from 'date-fns/format';

import helloWorld, { meta as helloWorldMeta } from './05-06-2018-hello-world';

export default [
  [helloWorld, helloWorldMeta]
]
  .map(([post, meta]) => {
    return [
      post,
      Object.assign({}, meta, {
        slug: `${format(meta.published, 'MM-DD-YYYY')}-${slugify(meta.title).toLowerCase()}`
      })
    ];
  });

export const getPostBySlug = (slug, posts) => {
  const match = posts.find(([post,meta]) => meta.slug === slug);
  if (match) {
    return match[0];
  }
  return '';
};
