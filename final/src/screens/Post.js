import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

import Post from '../components/Post';

import posts, { getPostBySlug } from '../blog';

const Container = styled.div``;

const Content = styled.div``;

export default function PostById({ match }) {
  const post = getPostBySlug(match.params.slug, posts);
  if (!post) {
    return (
      <Container>
        <h1>Could not find a post with that id</h1>
      </Container>
    );
  }

  return (
    <Post {...post} />
  );
}
