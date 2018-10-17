import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';

import posts from '../blog';

import Post from '../components/Post';
import NewPostButton from '../components/NewPostButton';

import { DIMENSIONS } from '../style/dimensions';

const Container = styled.div``;

const FlexContainer = styled(Flex)({
  flexDirection: 'column',
  ...DIMENSIONS.greaterThan('medium')({
    flexDirection: 'row'
  })
});

export default function Posts() {
  return (
    <Container>
      <FlexContainer>
        {posts.map(post => (
          <Box key={post.meta.slug} width={[1, 1 / 3]} px={2}>
            <Post
              markdown={post.markdown}
              meta={post.meta}
              preview
              interactive
            />
          </Box>
        ))}
      </FlexContainer>
      <NewPostButton />
    </Container>
  );
}
