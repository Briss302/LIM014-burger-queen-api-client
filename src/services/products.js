import { PATH_PRODUCTS } from "./../environment/env";
const axios = require("axios");
//const jwtDecode = require("jwt-decode");

export const productsRequest = async (request) => {
  const getProducts = await axios({
    method: "get",
    baseUrl: PATH_PRODUCTS,
    headers: {
      Authorization: localStorage.setItem("token"),
    },
  });
};
