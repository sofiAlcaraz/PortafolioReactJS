import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    action: {
      selectedHover: "#e6e8ecff",
    },
    primary: {
      main: "#3c72b6",
      light: "#c7c9ceff",
    },
    secondary: {
      main: "#f0f0f0",
      light: "#c7c9ceff",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    allVariants: {
      color: "#000000",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#000000",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.color === "secondary" && {
            color: "#000000",
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.secondary.contrastText,
            },
          }),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.color === "primary" && {
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          }),
          ...(ownerState.color === "secondary" && {
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          }),
        }),
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
