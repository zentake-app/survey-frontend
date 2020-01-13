import React from "react";
import { RouteComponentProps, Redirect } from "react-router";
import queryString from "query-string";
import { AuthenticationAPI } from "../repositories/authentication";

interface TokenProcessorProps extends RouteComponentProps {
  authenticationApi: AuthenticationAPI;
}

const TokenProcessor = (props: TokenProcessorProps) => {
  const { id_token: accessToken, scope, state } = queryString.parse(
    props.location.hash
  );
  if (!accessToken) {
    props.authenticationApi.logOut();
    return null;
  }
  props.authenticationApi.handleAuthorizationCallback(accessToken as string);
  return <Redirect to="/" />;
};

export { TokenProcessor };
