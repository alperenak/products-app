import { mediaBreakpointDown, mediaBreakpointUp } from './mediaQueries';

export const hideOnMobileDown = `
    ${mediaBreakpointDown('mobile')}{
        display: none !important;
    }
`;

export const hideOnTabletDown = `
    ${mediaBreakpointDown('tablet')}{
        display: none !important;
    }
`;

export const hideOnDesktopDown = `
    ${mediaBreakpointDown('desktop')}{
        display: none !important;
    }
`;

export const hideOnMobileUp = `
    ${mediaBreakpointUp('mobile')}{
        display: none !important;
    }
`;

export const hideOnTabletUp = `
    ${mediaBreakpointUp('tablet')}{
        display: none !important;
    }
`;

export const hideOnDesktopUp = `
    ${mediaBreakpointUp('desktop')}{
        display: none !important;
    }
`;
