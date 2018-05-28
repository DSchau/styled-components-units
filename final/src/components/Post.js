import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import marked from 'marked';

const Container = styled.div`
  margin: 0.25rem;

  border: 1px solid #EEE;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  background-color: black;

  height: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    background-color: red;
  }
`;

const Title = styled.h1`
  margin: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;

  z-index: 2;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default function Post({ markdown = '', meta = {}, preview }) {
  const html = preview ? meta.description : marked(markdown);

  return (
    <Container>
      <ImageContainer>
        <Image src={meta.image} />
        <Title><StyledLink to={`/posts/${meta.slug}`}>{meta.title}</StyledLink></Title>
      </ImageContainer>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}
