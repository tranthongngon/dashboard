import React, { useMemo, useState } from "react";
import "./App.css";
import Nav from "./layouts/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { getDesignTokens } from "./assets/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  // const [mode, setMode] = useState<PaletteMode>('light')
  const mode: PaletteMode = "dark";
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            {routes.map((route, index) => <Route path={route.route} element={route.component} key={route.key} />)}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
