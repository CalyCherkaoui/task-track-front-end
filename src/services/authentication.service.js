import axios from 'axios';
import API_ROOT from '../constantes/api';

const API_URL = API_ROOT;

const register = (username, email, password) => axios.post(`${API_URL}signup`, {
  username,
  email,
  password,
});

const login = (username, email, password) => axios
  .post(`${API_URL}login`, {
    username,
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });
