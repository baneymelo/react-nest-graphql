import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './ContextAPI/AppState';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <AppState>
      <App />
    </AppState>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);