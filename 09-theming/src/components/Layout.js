import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
  background-color: ${props => props.theme.base.bg};
  color: ${props => props.theme.base.color};
  font-family: sans-serif;
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
