import React from 'react';
import styled, { css } from 'styled-components';

import THEME from '../style/theme';

const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0.125rem;

  background-color: white;
  color: ${THEME.green.base};
  border: 2px solid ${THEME.green.base};
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: 175ms ease-in-out;

  :hover {
    background-color: #eee;
  }

  :focus {
    box-shadow: 0 0 4px ${THEME.green.base};
    outline: none;
  }

  :active {
    background-color: #ddd;
    color: ${THEME.green.darker};
  }

  ${props => props.primary && css`
    background-color: ${THEME.green.base};
    color: white;

    :hover {
      background-color: ${THEME.green.darker};
      border-color: ${THEME.green.darker};
    }

    :focus {
      box-shadow: 0 0 4px ${THEME.green.darkest};
      outline: none;
    }

    :active {
      background-color: ${THEME.green.darkest};
      color: white;
    }
  `}
`;

export default function ButtonComponent({ children, ...rest }) {
  return (
    <Button {...rest}>{children}</Button>
  );
}
