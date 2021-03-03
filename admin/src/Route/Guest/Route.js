import { FALSE } from "node-sass";
import React from "react";
import { Redirect, Route } from "react-router-dom";
function Route({ component: Component, ...rest }) {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} {...rest} />;
        }
      }}
    />
  );
}

export default Route;
