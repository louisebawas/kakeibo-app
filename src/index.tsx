import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalCss from './global.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={ client }>
    <BrowserRouter>
      <GlobalCss />
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
