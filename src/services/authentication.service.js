/* eslint-disable no-console */
import axios from 'axios';
import API_ROOT from '../constantes/api';

const API_URL = API_ROOT;

const register = (username, email, password) => axios.post(`${API_URL}signup`, {
  username,
  email,
  password,
})
  .then((response) => {
    console.log(response);
    if (response.data.headers.authorization) {
      localStorage.setItem('token', JSON.stringify(response.data.headers.authorization));
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data.headers.authorization);
      console.log(response.headers.authorization);
    }
    return response.data;
  });

const login = (username, email, password) => axios
  .post(`${API_URL}login`, {
    username,
    email,
    password,
  })
  .then((response) => {
    console.log(response);
    // if (response.data.headers.authorization) {
    //   localStorage.setItem('token', JSON.stringify(response.data.headers.authorization));
    //   localStorage.setItem('user', JSON.stringify(response.data));
    //   console.log(response.data.headers.authorization);
    //   console.log(response.headers.authorization);
    // }
    // return response.data;
    return response;
  });

const logout = async () => {
  const url = `${API_URL}logout`;
  const headers = {
    Authorization: localStorage.getItem('token'),
  };

  const response = await axios.delete(
    url,
    headers,
  );
  localStorage.setItem('logged-out', JSON.stringify(response.data));
  localStorage.removeItem('token');
  return response.data;
};

export default {
  register,
  login,
  logout,
};
