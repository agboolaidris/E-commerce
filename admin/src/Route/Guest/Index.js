import React from "react";
import Route from "./Route";
import Login from "../../Component/Auth/Login/Login";
import Home from "./../../Component/Layout/Dashboard/Home/Index";
function Index() {
  return (
    <>
      <Route component={Login} exact path="/login" />
      <Route component={Home} exact path="/" />
    </>
  );
}

export default Index;
