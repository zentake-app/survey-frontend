import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithLayout } from "./components/RouteWithLayout";
import { MainTemplate } from "./zulu-ui/templates/Main";
import { Dashboard } from "./routes/Dashboard";
import { ZuluAuthTemplate } from "./zulu-ui/templates/Auth";
import { SignIn } from "./routes/SignIn";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        path="/"
        layout={MainTemplate}
        component={Dashboard}
        exact
      />
      <RouteWithLayout
        path="/login"
        layout={ZuluAuthTemplate}
        component={SignIn}
        exact
      />
    </Switch>
  );
};

export { Routes };
