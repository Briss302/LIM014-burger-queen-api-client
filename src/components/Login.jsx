import React, {Fragment, useState} from "react";
import { useHistory } from "react-router-dom";
import { getToken } from "../services/auth";


export const Login = () => {
  // Redireccionar
  let history = useHistory();

  // formLogin: nombre del estado
  // setFormLogin: es un método que nos sirve para cambiar el
  // el valor del estado
  // useState(): hook, hace referencia al valor inicial del estado
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  // onChange hace referencia a handleInputChange
  // onChange va estar al pendiente de los valores que ingresan al input
  const handleInputChange = async (event) => {
    console.log(event)
    // Concatenar la data ingresada
    setFormLogin({
      ...formLogin,
      // Toma el nombre del input y lo esta relacionando con su valor
      // event.target.value -> pendientes al valor ingresado
      [event.target.name]: event.target.value,
    });
  };
  console.log(formLogin)
  // onSubmit hace referencia a handleSubmit
  // onSubmit va enviar los valores del input
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const result = await getToken(formLogin);
      changePage(result)
    }
    catch(err) {
      console.log(err)
    }
  };

  // changePage, en esta función se va redireccionar de página
  // de acuerdo al role del usuario logeado
  const changePage = (response) => {
    //TODO falta agregar la ruta de la vista si no es admin
    response.roles.admin ? history.push("/admin") : history.push("/");
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            name="email"
            type="text"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-1">
          <label htmlFor="inputPassword">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};
