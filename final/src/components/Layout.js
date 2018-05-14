import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
  font-family: sans-serif;
`;

const Content = styled.main`
  padding: 1rem;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
