import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Header/header.scss";

import HeaderProvider from "./components/Header/HeaderProvider";
import Login from "./pages/Login/Login";
import Location from "./pages/Location/Location";
import MainPage from "./pages/MainPage/MainPage";
import TakeOrder from "./pages/TakeOrder/TakeOrder";
import NewClient from "./pages/TakeOrder/NewClient/NewClient";
import TimeTracking from "./pages/TimeTracking/TimeTracking";
import ClosedOrders from "./pages/ClosedOrders/ClosedOrders";
import Menu from "./pages/Menu/Menu";
import Report from "./pages/Report/Report";
import Warehouse from "./pages/Warehouse/Warehouse";

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
        <Route path="/location/place/:rout/takeorder" exact>
          <TakeOrder />
        </Route>
        <Route path="/location/place/:rout/takeorder/newclient">
          <NewClient />
        </Route>
        <Route path="/location/place/:rout/timetracking">
          <TimeTracking />
        </Route>
        <Route path="/location/place/:rout/closedorders">
          <ClosedOrders />
        </Route>
        <Route path="/location/place/:rout/menu">
          <Menu />
        </Route>
        <Route path="/location/place/:rout/report">
          <Report />
        </Route>
        <Route path="/location/place/:rout/warehouse">
          <Warehouse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
