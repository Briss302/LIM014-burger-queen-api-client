import React from "react"; // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Login from "./components/Login";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btngroup">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
