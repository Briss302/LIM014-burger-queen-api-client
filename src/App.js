import React from "react"; // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { navBarAdmin } from "./components/ViewAdmin/navBarAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={navBarAdmin} />
      </Switch>
    </Router>
  );
}

export default App;
