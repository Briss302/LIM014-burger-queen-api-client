import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";
import { UserAdmin } from "./UserAdmin";
import { ProductAdmin } from "./ProductAdmin"

export const navBarAdmin = () => {
  
  return (
    <Router>
      <nav className="container mt-5">
        <div className="btn-group">
          <NavLink exact to="/usuarios" className="btn btn-dark" activeClassName="active">Trabajadores</NavLink>
          <NavLink exact to="/productos" className="btn btn-dark" activeClassName="active">Menú</NavLink>
          <NavLink exact to="/" className="btn btn-dark" activeClassName="active">Salir</NavLink>
        </div>
      </nav>
      <hr/>
      <Switch>
        <Route exact path="/usuarios"> <UserAdmin/> </Route>
        <Route exact path="/productos"> <ProductAdmin/> </Route>
      </Switch>
    </Router>
  );
}