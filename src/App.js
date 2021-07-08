import React from "react"; // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { UserAdmin } from "./components/ViewAdmin/UserAdmin";
import { ProductAdmin } from "./components/ViewAdmin/ProductAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin/usuarios" component={UserAdmin} />
        <Route path="/admin/productos" component={ProductAdmin} />
      </Switch>
    </Router>
  );
}

export default App;
