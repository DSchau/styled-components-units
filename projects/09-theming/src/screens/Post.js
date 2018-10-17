import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Post from '../components/Post';

import posts, { getPostBySlug } from '../blog';

const Container = styled.div``;

Container.defaultProps = {
  className: 'post'
};

export default function PostById({ match }) {
  const post = getPostBySlug(match.params.slug, posts);

  return (
    <Container>
      <PostStyle />
      {post ? <Post {...post} /> : <h1>Post not found</h1>}
    </Container>
  );
}

const PostStyle = createGlobalStyle`
  .post h1 {
    margin: 0.5rem;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid #EEE;
  }

  .post img {
    max-width: 100%;
  }
`;
