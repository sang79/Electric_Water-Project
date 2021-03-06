import Cookies from "universal-cookie";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { error } from "components";

const cookies = new Cookies();
const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_DEV_URL}/graphql`,
  headers: {
    Authorization: `Bearer ${cookies.get("ppe-token") ?? ``}`,
  },
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      // if (path === `login`) {
      //   return error(`Email or password are wrongs!`);
      // }
      // error(message);
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions,
});

export  {apolloClient};
