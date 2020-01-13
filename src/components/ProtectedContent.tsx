import React, { useEffect } from "react";
import { AuthenticationAPI } from "../repositories/authentication";

const ProtectedContent = (
  child: (props: any) => JSX.Element
): ((props: any) => JSX.Element) => {
  const [loading, setIsLoading] = React.useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState<
    boolean | undefined
  >(undefined);
  const authApi = new AuthenticationAPI();
  useEffect(() => {
    authApi.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn) {
        setIsAuthenticated(true);
        return setIsLoading(false);
      } else {
        setIsLoading(false);
        return setIsAuthenticated(false);
      }
    });
  }, []);
  if (!loading && isAuthenticated) {
    return child;
  }
  if (loading) {
    return () => <div>loading......</div>;
  }
  if (isAuthenticated === false) {
    authApi.logIn();
    return () => <div />;
  }
  return () => <div />;
};

export { ProtectedContent };
