import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: props => (props.type ? `alert alert-${props.type}` : 'alert')
})``;

export default function Alert({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
