import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { useMemo, useState } from "react";

const themeLigth = {
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
      contrastText: "#7a7979ff",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    h5: { color: "#073954" },
    h3: { color: "#073954" },
    h4: { color: "#333" },
    h6: { color: "#333" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
        }),
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "secondary",
      },
    },
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
};
const themeDark = {
  palette: {
    action: {
      selectedHover: "#1c324dff",
    },
    primary: {
      main: "#3c72b6",
      light: "#1c324dff",
    },
    secondary: {
      main: "#000000ff",
      light: "#1c324dff",
      contrastText: "#5e5c5cff",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    h5: { color: "#2688bdff" },
    h3: { color: "#2688bdff" },
    h4: { color: "#7a7979ff" },
    h6: { color: "#ffffff" },
    body2: { color: "#7a7979ff" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
        }),
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ffffffff",
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
            color: "#eff3f0ff",
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
};

function App() {
  const [mode, setMode] = useState(false);
  const theme = useMemo(
    () => createTheme(mode ? themeDark : themeLigth),
    [mode]
  ); //no se vuelva a dibujar con cada renderizado

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home setMode={setMode} mode={mode} />
    </ThemeProvider>
  );
}

export default App;
