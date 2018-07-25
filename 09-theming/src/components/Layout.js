import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
  background-color: white;
  color: black;
  font-family: sans-serif;

  min-height: 100vh;
`;

const Content = styled.main`
  padding: 1rem;
`;

export default function Layout({ children, onThemeToggle }) {
  return (
    <Container>
      <Header onThemeToggle={onThemeToggle} />
      <Content>{children}</Content>
    </Container>
  );
}
