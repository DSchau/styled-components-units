import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.green.base};
  color: white;
  border: none;
  border-radius: 6px;

  font-size: 18px;
  font-weight: bold;

  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  width: 100%;
  transition: 175ms ease-in-out;

  :hover {
    background-color: ${props => props.theme.green.darker};
  }

  :active {
    background-color: ${props => props.theme.green.darkest};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 8px ${props => props.theme.green.base};
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.green.base};
      color: white;

      :hover {
        background-color: ${props => props.theme.green.darker};
        border-color: ${props => props.theme.green.darker};
      }

      :focus {
        box-shadow: 0 0 4px ${props => props.theme.green.darkest};
        outline: none;
      }

      :active {
        background-color: ${props => props.theme.green.darkest};
        color: white;
      }
    `}

  ${props =>
    props.destructive &&
    css`
      background-color: ${props => props.theme.red.base};

      :hover {
        background-color: ${props => props.theme.red.darker};
      }

      :active {
        background-color: ${props => props.theme.red.darkest};
      }

      :focus {
        box-shadow: 0 0 4px ${props => props.theme.red.base};
      }
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.grey.darker};
      color: #666;
      cursor: not-allowed;

      :hover,
      :active {
        background-color: ${props => props.theme.grey.darker};
      }
    `}
`;

export default function ButtonComponent({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
