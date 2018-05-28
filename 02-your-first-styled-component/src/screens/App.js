import React from 'react';
import { Route } from 'react-router';

import Layout from '../components/Layout';
import NewPost from './NewPost';
import Post from './Post';
import Posts from './Posts';

export default function App() {
  return (
    <Layout>
      <Route path="/" component={Posts} exact />
      <Route path="/new" component={NewPost} exact />
      <Route path="/posts/:slug" component={Post} />
    </Layout>
  );
}
