import { css } from 'styled-components';

export const CIRCLE = (size = 48) => css`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size}px;
`;

export const FLEX = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
