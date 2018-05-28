import React from 'react';
import styled from 'styled-components';

// TODO: add in button styles
// note: ${THEME.green.base} will grab the green base color :)
const Button = styled.button``;

export default function ButtonComponent({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
