import React from "react";
import {} from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { MainTemplate } from "../zulu-ui/templates/Main";
import navigationItems from "./common/navigationItems";

export interface DashboardProps extends Partial<RouteComponentProps> {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <MainTemplate title="Dashboard" navigationItems={navigationItems}>
      <div />
    </MainTemplate>
  );
};

export { Dashboard };
