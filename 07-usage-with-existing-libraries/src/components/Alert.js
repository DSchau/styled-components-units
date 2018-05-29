import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: props => {
    // TODO: handle success, info, warning, danger
    return props.className;
  }
})``;

export default function Alert({ children, className, ...rest }) {
  return (
    <Container className={`${className} alert`} {...rest}>
      {children}
    </Container>
  );
}
