import React from "react";
import { Route, RouteProps } from "react-router-dom";

export interface RouteWIthLayoutProps extends RouteProps {
  layout: (props: any) => JSX.Element;
  component: (props: any) => JSX.Element;
}

const RouteWithLayout = ({
  layout: Layout,
  component: Component,
  ...rest
}: RouteWIthLayoutProps) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps}></Component>
        </Layout>
      )}
    />
  );
};

export { RouteWithLayout };
