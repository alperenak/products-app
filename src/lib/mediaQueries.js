const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1200px',
};

export function mediaBreakpointDown(breakpoint) {
  if (breakpoint === 'mobile') {
    return `@media (max-width: ${breakpoints.mobile})`;
  }
  if (breakpoint === 'tablet') {
    return `@media (max-width: ${breakpoints.tablet})`;
  }
  if (breakpoint === 'desktop') {
    return `@media (max-width: ${breakpoints.desktop})`;
  }
  return `@media (max-width: ${breakpoint}px)`;
}

export function mediaBreakpointUp(breakpoint) {
  if (breakpoint === 'mobile') {
    return `@media (min-width: ${breakpoints.mobile})`;
  }
  if (breakpoint === 'tablet') {
    return `@media (min-width: ${breakpoints.tablet})`;
  }
  if (breakpoint === 'desktop') {
    return `@media (min-width: ${breakpoints.desktop})`;
  }
  return `@media (min-width: ${breakpoint}px)`;
}
