import React from "react";
import { Redirect, Route } from "react-router-dom";
function Guest({ component: Component, ...rest }) {
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

export default Guest;
