import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import THEME from '../style/theme';

const Container = styled.header`
  display: flex;
  background-color: ${THEME.green.base};

  padding: 1rem 0.5rem;
`;

const Title = styled.h1`
  color: white;

  margin: 0;
`;

const StyledLink = styled(Link)`
  color: inherit;

  text-decoration: none;
`;

export default function Header() {
  return (
    <Container>
      <Title>
        <StyledLink to="/">Your great blog</StyledLink>
      </Title>
    </Container>
  );
}
