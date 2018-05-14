import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  background-color: #2C3E50;

  padding: 1rem 0.5rem;
`;

const Title = styled.h1`
  color: white;

  margin: 0;
`;

export default function Header() {
  return (
    <Container>
      <Title>Your great blog</Title>
    </Container>
  );
}
