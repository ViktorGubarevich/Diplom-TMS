import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Validation from "./pages/Login/Validation";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Validation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
