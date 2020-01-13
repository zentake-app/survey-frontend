export default {
  graphqlBaseUrl: process.env.REACT_APP_GRAPHQL_BASE_URL as string,
  authentication: {
    tokenStorageKey: "token",
    authCallbackUrl: `${process.env.REACT_APP_BASE_URL}/auth/redirectTarget`,
    logoutRedirectUrl: `https://zentake.com`,
    authDomain: "zentake-dev.auth0.com"
  }
};
