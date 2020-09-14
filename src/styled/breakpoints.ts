const size = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xlg: '1440px',
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xlg: `(min-width: ${size.xlg})`,

  xsDown: `(max-width: ${size.xs})`,
  smDown: `(max-width: ${size.sm})`,
  mdDown: `(max-width: ${size.md})`,
  lgDown: `(max-width: ${size.lg})`,
  xlgDown: `(max-width: ${size.xlg})`,
};
