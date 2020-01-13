import ApolloClient from "apollo-boost";
import settings from "../../../config/settings";
import { AuthenticationAPI } from "../../authentication";

const zuluApolloClient = new ApolloClient({
  uri: settings.graphqlBaseUrl,
  headers: {
    Authorization: `Bearer ${AuthenticationAPI.getToken()}`
  }
});

export { zuluApolloClient };
