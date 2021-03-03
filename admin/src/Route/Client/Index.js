import React from "react";
import Home from "./../../Component/Layout/Dashboard/Home/Index";
import Route from "./Route";

function Index() {
  return <Route component={Home} exact path="/" />;
}

export default Index;
