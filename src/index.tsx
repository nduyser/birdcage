import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cliojpuix0ayd01um2fhaedbu/master",
    cache: new InMemoryCache()
})


root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App/>
      </ApolloProvider>
  </React.StrictMode>
);
