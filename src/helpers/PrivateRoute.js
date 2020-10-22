import React from "react"
import { Redirect, Route } from "react-router-dom"


export const PrivateRoute = ({ children, ...rest}) => (
  <Route
    {...rest}
    render={({location}) => 
      localStorage.getItem("token") ? (
        children
      ) : (
        <Redirect
          to={{
            pathname:"/",
            state: { from: location}
          }}
        />
      )
    }
  />
)