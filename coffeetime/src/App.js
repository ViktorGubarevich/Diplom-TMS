import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Header/header.scss";

import Login from "./pages/Login/Login";
import HeaderProvider from "./components/Header/HeaderProvider";
import Location from "./pages/Location/Location";
import MainPage from "./pages/MainPage/MainPage";

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
          <Login />
        </Route>
        <Route path="/location" exact>
          {wrapHeader(Location)}
        </Route>
        <Route path="/location/place/:rout" exact>
          {wrapHeader(MainPage)}
        </Route>
        <Route path="/location/place/:rout/777">{wrapHeader(Location)}</Route>
      </Switch>
    </Router>
  );
}

export default App;
