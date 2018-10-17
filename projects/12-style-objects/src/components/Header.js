import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LightbulbIcon from 'react-icons/lib/md/lightbulb-outline';

const Container = styled.header`
  display: flex;
  background-color: ${props => props.theme.green.base};
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0.5rem;
`;

const Title = styled.h1`
  color: white;

  margin: 0;
`;

const StyledLink = styled(Link)`
  color: inherit;

  text-decoration: none;

  :hover {
    color: inherit;
  }
`;

const ThemeToggle = styled(LightbulbIcon)`
  color: ${props => props.theme.base.color};
  cursor: pointer;
  transition: transform 175ms ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export default function Header(props) {
  return (
    <Container>
      <Title>
        <StyledLink to="/">Your great blog</StyledLink>
      </Title>
      <ThemeToggle onClick={props.onThemeToggle} size={24} />
    </Container>
  );
}
