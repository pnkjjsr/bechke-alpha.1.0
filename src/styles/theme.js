import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      light: "#E0F3F8",
      main: "#66c1de",
      dark: "#2b91ac",
      contrastText: '#fff',
    },
    secondary: {
      light: "#ff98f4",
      main: "#de66c1",
      dark: "#aa3390",
      contrastText: '#fff',
    },
    error: {
      main: "#c00",
    },
    warning: {
      main: "#ef873d",
    },
    info: {
      main: "#09c",
    },
    success: {
      main: "#5fbe40",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#0c2e39",
      secondary: "#5e737a",
      disabled: "",
    }
  },
  typography: {
    htmlFontSize: 16,
    typography: {
      fontFamily: [
        "Lato",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ].join(",")
    },
    fontSize: 16,
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    fontDisplay: "swap",
  },
  breakpoints: {
    values: {
      xs: 321,
      sm: 568,
      md: 768,
      lg: 992,
      xl: 1200,
      ss: 1410,
      ms: 1660,
      ls: 1920,
    },
  },
  shape: {
    borderRadius: 16,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
      }
    `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: '400',
        },
        contained: {
          color: '#fff',
          textTransform: 'capitalize'
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#5e737a",
        },
      },
    },
  },
});

export default theme;
