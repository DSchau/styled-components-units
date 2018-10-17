import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Post from '../components/Post';

import posts, { getPostBySlug } from '../blog';
import THEME from '../style/theme';

const Container = styled.div``;

Container.defaultProps = {
  className: 'post'
};

export default function PostById({ match }) {
  const post = getPostBySlug(match.params.slug, posts);
  if (!post) {
    return <Container />;
  }

  return (
    <Container>
      {post ? <Post {...post} /> : <h1>Could not find a post with that id</h1>}
    </Container>
  );
}

export const PostStyle = createGlobalStyle`
  .post h1 {
    margin: 0.5rem;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid #EEE;
  }

  .post img {
    max-width: 100%;
  }

  .post p > a {
    color: ${props => props.theme.green.base};

    :hover {
      color: ${props => props.theme.green.darker};
    }
  }
`;
