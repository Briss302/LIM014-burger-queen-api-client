import { PATH_PRODUCTS } from "./../environment/env";
const axios = require("axios");
//const jwtDecode = require("jwt-decode");

export const getToken = async (request) => {
  const getResponse = await axios.get(PATH_PRODUCTS, request);
  console.log(getResponse)
};
