import React from "react";
import { Redirect, Route } from "react-router-dom";
function Client({ component: Component, ...rest }) {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} {...rest} />;
        }
      }}
    />
  );
}

export default Client;
