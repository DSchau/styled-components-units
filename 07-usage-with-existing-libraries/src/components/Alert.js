import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({})``;

export default function Alert({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
