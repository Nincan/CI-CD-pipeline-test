/**
 * @author Yash Soni
 */

/* eslint import/prefer-default-export: 0 */

// TODO: Grab breakpoints from theme
const breakpoints = {
  small: 670,
  medium: 920,
  large: 1280,
};

const responsiveTheme = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc.mediaQuery[key] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {} as Record<keyof typeof breakpoints, string>,
  }
);

export const withResponsiveTheme = <T extends object>(theme: T): T & typeof responsiveTheme => ({
  ...theme,
  ...responsiveTheme,
});
