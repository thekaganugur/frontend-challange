const size = {
  xs: '768px',
  md: '992px',
  lg: '1200px',
  xlg: '1440px',
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xlg: `(min-width: ${size.xlg})`,

  xsDown: `(max-width: ${size.xs})`,
  mdDown: `(max-width: ${size.md})`,
  lgDown: `(max-width: ${size.lg})`,
  xlgDown: `(max-width: ${size.xlg})`,
};
