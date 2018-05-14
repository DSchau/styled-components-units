import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import marked from 'marked';

const Container = styled.div`
  padding: 1rem;

  border: 1px solid #EEE;
`;

const Title = styled.h1`
  margin: 0;
`;

const Content = styled.div``;

export default function Post({ markdown = '', meta = {}, preview }) {
  const html = preview ? meta.description : marked(markdown);

  return (
    <Container>
      <Title><Link to={`/posts/${meta.slug}`}>{meta.title}</Link></Title>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}
