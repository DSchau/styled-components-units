import { darken, lighten, invert } from 'polished';

const COLORS = {
  base: '#222',
  text: '#eee',
  grey: '#ccc',
  green: '#1D5D3B',
  red: '#e05a4c',
  blue: '#2196F3'
};

const THEME = {
  dark: {
    base: {
      bg: COLORS.base,
      color: COLORS.text
    },
    grey: {
      base: COLORS.grey,
      darker: darken(0.2, COLORS.grey),
      darkest: darken(0.4, COLORS.grey)
    },
    green: {
      base: COLORS.green,
      darker: darken(0.2, COLORS.green),
      darkest: darken(0.4, COLORS.green)
    },
    red: {
      base: COLORS.red,
      darker: darken(0.2, COLORS.red),
      darkest: darken(0.4, COLORS.red)
    },
    blue: {
      base: COLORS.blue,
      darker: darken(0.2, COLORS.blue),
      darkest: darken(0.4, COLORS.blue)
    }
  },
  light: {
    base: {
      bg: lighten(0.5, invert(COLORS.base)),
      color: invert(COLORS.text)
    },
    grey: {
      base: COLORS.grey,
      darker: darken(0.2, COLORS.grey),
      darkest: darken(0.4, COLORS.grey)
    },
    green: {
      base: COLORS.green,
      darker: darken(0.2, COLORS.green),
      darkest: darken(0.4, COLORS.green)
    },
    red: {
      base: COLORS.red,
      darker: darken(0.2, COLORS.red),
      darkest: darken(0.4, COLORS.red)
    },
    blue: {
      base: COLORS.blue,
      darker: darken(0.2, COLORS.blue),
      darkest: darken(0.4, COLORS.blue)
    }
  }
};

export default THEME;
