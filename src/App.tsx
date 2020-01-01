import React from "react";
import { ZuluThemeProvider } from "./zulu-ui/theme/ThemeProvider";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from "./Routes";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ZuluThemeProvider>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ZuluThemeProvider>
  );
};

export default App;
