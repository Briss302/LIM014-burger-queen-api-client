import React from "react"; // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
//import { NavBarAdmin } from "./components/ViewAdmin/NavBarAdmin";
//temporal
import { ProductAdmin } from "./components/ViewAdmin/ProductAdmin"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={ProductAdmin} />
      </Switch>
    </Router>
  );
}

export default App;
