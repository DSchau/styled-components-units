import React from 'react';
import styled from 'styled-components';

import THEME from '../style/theme';

// TODO: add :hover, :active, and :focus styles to the component
const Button = styled.button`
  background-color: ${THEME.green.base};
  color: white;
  border: none;
  border-radius: 6px;

  font-size: 18px;
  font-weight: bold;

  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  width: 100%;
`;

export default function ButtonComponent({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
