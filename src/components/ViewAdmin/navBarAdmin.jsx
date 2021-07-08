import React from "react";
import { Link } from "react-router-dom";

export const NavBarAdmin = () => {
  return (
    <>
      <nav className="container mt-5">
        <div className="btn-group">
          <Link
            to="/admin/usuarios"
            className="btn btn-dark"
            activeclassname="active"
          >
            Trabajadores
          </Link>
          <Link
            to="/admin/productos"
            className="btn btn-dark"
            activeclassname="active"
          >
            Menú
          </Link>
          <Link
            to="/"
            className="btn btn-dark"
            activeclassname="active"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Salir
          </Link>
        </div>
      </nav>
      <hr />
    </>
  );
};