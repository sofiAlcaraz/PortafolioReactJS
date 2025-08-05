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
    primary: {
      main: "#3c72b6",
    },
    secondary: {
      main: "#f0f0f0",
    },
    text: {
      primary: "#000000", // texto principal en negro
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
