import { Theme, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#23b19f",
    },
  },
  typography: {
    fontFamily: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& *::placeholder": {
            fontWeight: 500,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.75,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 50,
          "&, &:hover, &:active": {
            boxShadow: "none",
          },
        },
        sizeMedium: {
          padding: ".7rem 3.5rem",
          letterSpacing: ".075rem",
        },
        contained: {
          color: "white",
        },
        containedPrimary: {
          "&:hover, &:active": {
            background: "#15a695",
          },
        },
      },
    },
  },
});

declare module "@mui/styles" {
  interface DefaultTheme extends Theme {}
}
