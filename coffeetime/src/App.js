import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Header/header.scss";

import Validation from "./pages/Login/Validation";
import HeaderProvider from "./components/Header/HeaderProvider";
import Location from "./pages/Location/Location";

function wrapHeader(Component) {
  return (
    <HeaderProvider>
      <Component />
    </HeaderProvider>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Validation />
        </Route>
        <Route path="/location">{wrapHeader(Location)}</Route>
        <Route path="/location/place">{wrapHeader(Location)}</Route>
      </Switch>
    </Router>
  );
}

export default App;
