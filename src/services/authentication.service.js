import axios from "axios";
import API_root from "../constantes/api";

const API_URL = API_root;

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

