import React from "react"; // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { navBarAdmin } from "./components/ViewAdmin/navBarAdmin";
import { UserAdmin } from "./components/ViewAdmin/UserAdmin";
import { ProductAdmin } from "./components/ViewAdmin/ProductAdmin";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={navBarAdmin} />
        <Route exact path="/usuarios" component={UserAdmin}/>
        <Route exact path="/productos" component={ProductAdmin}/>
      </Switch>
    </Router>
  );
}

export default App;
