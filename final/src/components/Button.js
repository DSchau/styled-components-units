import React from 'react';
import styled from 'styled-components';

const Button = styled.button`

`;

export default function ButtonComponent({ children, ...rest }) {
  return (
    <Button {...rest}>children</Button>
  );
}
