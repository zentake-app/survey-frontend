import React from "react";
import { zuluApolloClient } from "../src/repositories/common/graphql/apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";

const apolloDecorator = storyFn => (
  <ApolloProvider client={zuluApolloClient}>{storyFn()}</ApolloProvider>
);

export default apolloDecorator;
