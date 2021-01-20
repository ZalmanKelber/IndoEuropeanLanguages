import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
