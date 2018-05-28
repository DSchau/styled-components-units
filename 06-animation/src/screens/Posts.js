import React from 'react';
import styled from 'styled-components';

import posts from '../blog';
import Post from '../components/Post';
import NewPostButton from '../components/NewPostButton';

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 33% 33% 33%;
  }
`;

export default function Posts() {
  return (
    <Container>
      <Grid>
        {posts.map(post => (
          <Post
            markdown={post.markdown}
            meta={post.meta}
            key={post.meta.slug}
            preview
          />
        ))}
      </Grid>
      <NewPostButton />
    </Container>
  );
}
