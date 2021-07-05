import { PATH_AUTH } from "./../environment/env";
const axios = require("axios");

export const getToken = async (request) => {
  const response = await axios.post(PATH_AUTH, request);
  return console.log(response.data.token);
};