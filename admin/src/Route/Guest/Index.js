import React from "react";
import Route from "./Route";
import Login from "../../Component/Auth/Login/Login";
function Index() {
  return <Route component={Login} exact path="/login" />;
}

export default Index;
