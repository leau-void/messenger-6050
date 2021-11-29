import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      fontFamily: "Montserrat, Open Sans, sans-serif",
      fontSize: "16px !important"
    },
    h1: {
      fontSize: 26,
      fontWeight: "bold"
    },
    h2: {
      fontSize: "26px",
      textAlign: "center",
      lineHeight: "40px",

      "@media (max-width: 475px)": {
        fontSize: "20px"
      }
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  }
});
