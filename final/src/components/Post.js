import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

const Container = styled.div``;

const Content = styled.div``;

export default function Post({ markdown = '' }) {
  const html = marked(markdown);

  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}
