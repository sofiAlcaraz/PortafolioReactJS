import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { useMemo, useState } from "react";
import { themeDark, themeLigth } from "./theme";

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
