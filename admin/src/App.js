import React from "react";
import GuestRoute from "./Route/Guest/Index";
import ClientRoute from "./Route/Client/Index";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GuestRoute />
        <ClientRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
