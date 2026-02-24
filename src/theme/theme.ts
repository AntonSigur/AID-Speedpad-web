"use client";
import { createTheme } from "@mui/material/styles";

// IT Ant ehf blue ant theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196F3",
      light: "#64B5F6",
      dark: "#1565C0",
    },
    secondary: {
      main: "#00BCD4",
      light: "#4DD0E1",
      dark: "#00838F",
    },
    background: {
      default: "#0F2035",
      paper: "#162D50",
    },
    text: {
      primary: "#E2E8F0",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          padding: "10px 24px",
        },
      },
    },
  },
});

export default theme;
