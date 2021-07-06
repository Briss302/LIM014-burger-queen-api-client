import { PATH_AUTH } from "./../environment/env";
const axios = require("axios");
const jwtDecode = require("jwt-decode")

export const getToken = async (request) => {
  const response = await axios.post(PATH_AUTH, request);
  //OH: ¿Guardar token en el local storage?
  const token = response.data.token;

  switch (response.status) {
    case 200:
      // token será guardado en el local storage,para que el usuario pueda realizar
      // las peticiones Http
      localStorage.setItem("token", token);
      const decodeToken = jwtDecode.default(token);
      return decodeToken;
    case 400:
      throw new Error("Inserta un email y contraseña correctos");
    default:
      throw new Error(response.statusText);
  }
};