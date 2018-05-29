import { css, keyframes } from 'styled-components';

const SLIDE_IN_ANIMATION = keyframes`
  from {
    opacity: 0;
    transform: translateY(50vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FADE_IN_ANIMATION = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SLIDE_IN = css`
  animation: ${SLIDE_IN_ANIMATION} 300ms ease-in-out;
`;

export const FADE_IN = css`
  animation: ${FADE_IN_ANIMATION} 300ms ease-in-out;
`;
