import { darken, invert } from 'polished';

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
      bg: '#FFF',
      color: '#222'
    },
    grey: {
      base: '#CCC',
      darker: '#AAA',
      darkest: '#999'
    },
    green: {
      base: '#468966',
      darker: '#35674D',
      darkest: '#1D5D3B'
    },
    red: {
      base: '#E74C3C',
      darker: '#BE3021',
      darkest: '#931B0E'
    },
    blue: {
      base: '#2196F3',
      darker: '#1976D2',
      darkest: '#0D47A1'
    }
  }
};

export default THEME;
