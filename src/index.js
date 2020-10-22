import React, { Suspense }  from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from '@apollo/react-hooks'
import './i18n';

import App from "./App"
import * as serviceWorker from "./serviceWorker"
import store from "./store/store"
import "./styles/tailwind.compiled.css"

const url = "http://localhost:4000";

const client = new ApolloClient ({
  uri: url,
  request: (operation) => {
    const token = localStorage.getItem("token");

    operation.setContext({
      headers: {
        authorizon: token && `Bearer ${token}`
      }
    })
  }
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </Router>
      </Provider>
    </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister()
