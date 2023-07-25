export const font_size_unit: 'px' | 'em' | 'rem' | 'pt' = 'px';

export const sizes: Readonly<Record<string, number>> = {
};

export const color: Readonly<Record<string, string>> = {
  black: '#000000',
  white: '#ffffff',
};

const breakpoint_sizes = {
  mobile: 320,
  tablet: 758,
  desktop: 1024,
};

export const contents_max_width = {
  tablet: breakpoint_sizes.tablet,
  desktop: breakpoint_sizes.desktop,
};

export const breakpoints = {
  mobile: `@media (min-width: ${breakpoint_sizes.mobile}px) and (max-width: ${breakpoint_sizes.tablet - 1}px)`,
  tablet: `@media (min-width: ${breakpoint_sizes.tablet}px) and (max-width: ${breakpoint_sizes.desktop - 1}px)`,
  desktop: `@media (min-width: ${breakpoint_sizes.desktop}px)`,
};
