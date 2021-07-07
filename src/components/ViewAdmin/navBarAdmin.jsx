import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { UserAdmin } from "./UserAdmin";
import { ProductAdmin } from "./ProductAdmin";

export const NavBarAdmin = () => {
  return (
    <>
      <nav className="container mt-5">
        <div className="btn-group">
          <NavLink
            exact
            to="admin/usuarios"
            className="btn btn-dark"
            activeClassName="active"
          >
            Trabajadores
          </NavLink>
          <NavLink
            exact
            to="admin/productos"
            className="btn btn-dark"
            activeClassName="active"
          >
            Menú
          </NavLink>
          <NavLink
            exact
            to="/"
            className="btn btn-dark"
            activeClassName="active"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Salir
          </NavLink>
        </div>
      </nav>
      <hr />
      <Switch>
        <Route exact path="admin/usuarios">
          <UserAdmin />
        </Route>
        <Route exact path="admin/productos">
          <ProductAdmin />
        </Route>
      </Switch>
    </>
  );
};