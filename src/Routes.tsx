import React from "react";
import { Switch, Route } from "react-router-dom";
import { RouteWithLayout } from "./components/RouteWithLayout";
import { MainTemplate } from "./zulu-ui/templates/Main";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        path="/"
        layout={MainTemplate}
        component={() => <div />}
        exact
      />
    </Switch>
  );
};

export { Routes };
