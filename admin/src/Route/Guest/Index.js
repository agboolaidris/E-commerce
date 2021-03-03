import React from "react";
import Route from "./Route";
import Login from "../../Component/Auth/Login/Login";
import Home from "./../../Component/Layout/Dashboard/Home/Index";
import Register from "./../../Component/Auth/Register/Register";
function Index() {
  return (
    <>
      <Route component={Login} exact path="/login" />
      <Route component={Home} exact path="/" />
      <Route component={Register} exact path="/register" />
    </>
  );
}

export default Index;
