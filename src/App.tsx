import React from "react";
import { ZuluThemeProvider } from "./zulu-ui/theme/ThemeProvider";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from "./Routes";
import { ApolloProvider } from "@apollo/react-hooks";
import { zuluApolloClient } from "./repositories/common/graphql/apolloClient";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ApolloProvider client={zuluApolloClient}>
      <ZuluThemeProvider>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ZuluThemeProvider>
    </ApolloProvider>
  );
};

export default App;
