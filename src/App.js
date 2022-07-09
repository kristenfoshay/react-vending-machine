import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Frenchfries from "./Frenchfries";
import Toast from "./Toast";
import Mochi from "./Mochi";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/Mochi" exact>
          <Mochi />
        </Route>
        <Route path="/Toast" exact>
          <Toast />
        </Route>
        <Route path="/Frenchfries" exact>
          <Frenchfries />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;