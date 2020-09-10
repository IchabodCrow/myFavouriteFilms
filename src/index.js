import React, { Suspense }  from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import './i18n';
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import store from "./store/store"

import "./styles/tailwind.compiled.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
serviceWorker.unregister()
