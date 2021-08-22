/* eslint-disable no-console */
/* eslint-disable max-len */
import axios from 'axios';
import API_ROOT from '../constantes/api';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_FAIL,
} from './types';

export const register = (username, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_ROOT}signup`, {
      username,
      email,
      password,
    });

    localStorage.setItem('token', JSON.stringify(response.data.headers.authorization));
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data.headers.authorization);
    console.log(response.headers.authorization);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.message,
    });
  }
};

export const login = (username, email, password) => async (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const userData = {
    username,
    email,
    password,
  };

  // const autHeader = {
  //   Authorization: 'my secret token',
  // };

  try {
    const response = await axios.post(`${API_ROOT}login`, { user: userData }, { headers });

    // localStorage.setItem('token', JSON.stringify(response.data.headers.authorization));
    // localStorage.setItem('user', JSON.stringify(response.data));
    // console.log(response.data.headers.authorization);
    // eslint-disable-next-line dot-notation
    const token = response.headers['access-token'];
    console.log(token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  const headers = {
    Authorization: localStorage.getItem('token'),
  };
  try {
    const response = await axios.delete(`${API_ROOT}logout`, headers);
    dispatch({
      type: LOGOUT,
      payload: response,
    });

    localStorage.setItem('logged-out', JSON.stringify(response.data));
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.message,
    });
  }
};
