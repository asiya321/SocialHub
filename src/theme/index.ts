import { BreakpointsOptions, createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

import palette from "./palette";
import typography from "./typography";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    midxs: true;
    sm: true;
    midsm: true;
    md: true;
    midmd: true;
    lg: true;
    midlg: true;
    xl: true;
  }
}

interface ExtendedBreakpointOptions extends BreakpointsOptions {
  midxs: number;
  midsm: number | any;
  midmd: number;
  midlg: number;
}

const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 700,
    md: 1440,
    lg: 1441,
    xl: 1536,
  },
};

const breakpoints: any = createBreakpoints({ ...customBreakpointValues });

const lightTheme = createTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  breakpoints: {
    ...customBreakpointValues,
  } as ExtendedBreakpointOptions,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          lineHeight: "20px",
          fontSize: "14px",
          fontWeight: 400,
          [breakpoints.down("midsm")]: {
            fontSize: "12px",
          },
          // borderRadius: 0,
          boxShadow: "unset",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          "&.Mui-disabled": {
            backgroundColor: palette.action.disabled,
            color: palette.common.white,
          },
          "& .MuiLoadingButton-loadingIndicator": {
            color: palette.common.white,
          },
          disableRipple: false,
        },

        outlined: {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          backgroundColor: palette.common.white,
          "&:hover": {
            borderColor: palette.primary.main,
            backgroundColor: palette.common.white,
          },
        },
        contained: {
          color: palette.common.white,
          backgroundColor: palette.primary.main,
          "&:hover": {
            backgroundColor: palette.primary.main,
          },
        },
        containedSizeLarge: {
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          padding: "10px 24px",
        },
        containedSizeMedium: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          padding: "6px 24px",
        },
        containedSizeSmall: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "16px",
          padding: "6px 12px",
        },
        outlinedSizeLarge: {
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          padding: "10px 24px",
        },
        outlinedSizeMedium: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          padding: "6px 24px",
        },
        outlinedSizeSmall: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "16px",
          padding: "6px 12px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          pointerEvents: "none",
        },
        message: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default lightTheme;
