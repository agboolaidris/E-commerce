import React from "react";
import GuestRoute from "./Route/Guest/Index";
import ClientRoute from "./Route/Client/Index";
import { BrowserRouter, Switch } from "react-router-dom";
import Nav from "./Component/Layout/Nav/Index";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <BrowserRouter>
        <Nav />
        <GuestRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
