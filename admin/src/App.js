import React from "react";
import GuestRoute from "./Route/Guest/Index";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <GuestRoute />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
