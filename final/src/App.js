import React, { Component } from 'react';

import Button from './components/Button';
import Post from './components/Post';

import posts, { getPostBySlug } from './blog';

class App extends Component {
  render() {
    return (
      <Post markdown={getPostBySlug('05-06-2018-hello-world', posts)} />
    );
  }
}

export default App;
