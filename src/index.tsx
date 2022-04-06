import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter } from 'react-router-dom';


const httpLink = createHttpLink({
  uri: "http://127.0.0.1:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : null
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>< App /></BrowserRouter>
  </ApolloProvider>
  ,
  document.getElementById('root')
);


