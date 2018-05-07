import React from 'react';
import styled from 'styled-components';

const Button = styled.button`

`;

export default function ButtonComponent({ onClick }) {
  return (
    <Button onClick={onClick}>TODO: Make me a styled component</Button>
  );
}
