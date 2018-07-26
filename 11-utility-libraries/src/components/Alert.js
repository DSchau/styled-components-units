import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: props => {
    const types = ['warning', 'alert', 'success', 'info'];
    const type = types.find(item => props[item]) || 'info';
    return `${props.className} alert-${type}`;
  }
})``;

export default function Alert({ children, className, ...rest }) {
  return (
    <Container className={`${className} alert`} {...rest}>
      {children}
    </Container>
  );
}
