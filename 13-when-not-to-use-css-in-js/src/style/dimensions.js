const BREAKPOINTS = {
  small: '0em',
  medium: '32em',
  large: '44em'
};

export const DIMENSIONS = {
  greaterThan(breakpoint) {
    const res = BREAKPOINTS[breakpoint] || BREAKPOINTS.small;
    return function(...styles) {
      const merged = styles.reduce(
        (all, style) => Object.assign(all, style),
        {}
      );
      return {
        [`@media only screen and (min-width: ${res})`]: merged
      };
    };
  }
};
