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

  try {
    const response = await axios.post(`${API_ROOT}login`, { user: userData }, { headers });

    localStorage.setItem('token', response.headers.authorization);
    localStorage.setItem('user', JSON.stringify(response.data.data.attributes));
    console.log(response.headers.authorization);

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
    authorization: localStorage.getItem('token'),
  };

  try {
    const response = await axios.delete(`${API_ROOT}logout`, { headers });
    localStorage.setItem('logged-out', true);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
      type: LOGOUT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error,
    });
  }
};
