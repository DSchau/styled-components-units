import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0.125rem;

  background-color: white;
  color: #468966;
  border: 2px solid #468966;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: 175ms ease-in-out;

  :hover {
    background-color: ${lighten(0.3, '#468966')};
    color: white;
  }

  ${props => props.primary && css`
    background-color: #468966;
    color: white;

    :hover {
      background-color: ${darken(0.1, '#468966')};
      border-color: ${darken(0.1, '#468966')};
    }
  `}
`;

export default function ButtonComponent({ children, ...rest }) {
  return (
    <Button {...rest}>{children}</Button>
  );
}
