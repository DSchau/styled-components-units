import React from 'react';
import styled from 'styled-components';

import THEME from '../style/theme';

const Button = styled.button`
  background-color: ${THEME.green.base};
  color: white;
  border-radius: 6px;

  font-size: 18px;
  font-weight: bold;

  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  width: 100%;
  transition: 175ms ease-in-out;

  :hover {
    background-color: ${THEME.green.darker};
  }

  :active {
    background-color: ${THEME.green.darkest};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 8px ${THEME.green.base};
  }
`;

export default function ButtonComponent({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
