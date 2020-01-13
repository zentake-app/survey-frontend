import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components/RouteWithLayout";
import { MainTemplate } from "./zulu-ui/templates/Main";
import { Dashboard } from "./routes/Dashboard";
import { ZuluAuthTemplate } from "./zulu-ui/templates/Auth";
import { SignIn } from "./routes/SignIn";
import { ProtectedContent as protectedContent } from "./components/ProtectedContent";
import { TokenProcessor } from "./components/TokenProcessor";
import { AuthenticationContext } from "./providers/authenticationProvider";
import { AuthenticationAPI } from "./repositories/authentication";
import { Logout } from "./components/Logout";

const Routes = () => {
  const authenticationApi = new AuthenticationAPI();
  return (
    <AuthenticationContext.Provider value={authenticationApi}>
      <Switch>
        <Route
          path="/auth/redirectTarget"
          component={(props: any) => (
            <TokenProcessor {...props} authenticationApi={authenticationApi} />
          )}
        />
        <Route path="/logout" component={Logout} />

        <RouteWithLayout
          path="/"
          layout={MainTemplate}
          component={() => <Redirect to="/dashboard" />}
          exact
        />
        <RouteWithLayout
          path="/dashboard"
          layout={MainTemplate}
          component={protectedContent(Dashboard)}
        />
        <RouteWithLayout
          path="/login"
          layout={protectedContent(ZuluAuthTemplate)}
          component={SignIn}
          exact
        />
      </Switch>
    </AuthenticationContext.Provider>
  );
};

export { Routes };
