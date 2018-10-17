import React from 'react';
import styled, { css } from 'styled-components';

import THEME from '../style/theme';

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

  ${props =>
    props.primary &&
    css`
      background-color: ${THEME.green.base};
      color: white;

      :hover {
        background-color: ${THEME.green.darker};
        border-color: ${THEME.green.darker};
      }

      :focus {
        box-shadow: 0 0 4px ${THEME.green.darkest};
        outline: none;
      }

      :active {
        background-color: ${THEME.green.darkest};
        color: white;
      }
    `}

  ${props =>
    props.destructive &&
    css`
      background-color: ${THEME.red.base};

      :hover {
        background-color: ${THEME.red.darker};
      }

      :active {
        background-color: ${THEME.red.darkest};
      }

      :focus {
        box-shadow: 0 0 4px ${THEME.red.base};
      }
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${THEME.grey.darker};
      color: #666;
      cursor: not-allowed;

      :hover,
      :active {
        background-color: ${THEME.grey.darker};
      }
    `}
`;

export default function ButtonComponent({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
