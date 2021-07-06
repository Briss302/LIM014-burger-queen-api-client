import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";


export const navBarAdmin = () => {
  
  
  return (
    <>
      <nav className="container mt-5">
        <div className="btn-group">
          <NavLink
            exact
            to="/usuarios"
            className="btn btn-dark"
            activeClassName="active"
          >
            Trabajadores
          </NavLink>
          <NavLink
            exact
            to="/productos"
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
    </>
  );
}