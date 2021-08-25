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
  const headers = {
    'Content-Type': 'application/json',
  };

  const userData = {
    username,
    email,
    password,
  };

  try {
    const response = await axios.post(`${API_ROOT}signup`, { user: userData }, { headers });

    sessionStorage.setItem('token', response.data.headers.authorization);
    sessionStorage.setItem('user', response.data);
    sessionStorage.setItem('logged-out', false);
    // console.log(response.data.headers.authorization);
    // console.log(response.headers.authorization);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error,
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

    sessionStorage.setItem('token', response.headers.authorization);
    sessionStorage.setItem('user', response.data.data.attributes);
    sessionStorage.setItem('logged-out', false);
    // console.log(response.headers.authorization);
    // console.log(sessionStorage.getItem('token'));

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
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.delete(`${API_ROOT}logout`);
    dispatch({
      type: LOGOUT,
      payload: response.data,
    });

    sessionStorage.setItem('logged-out', true);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGOUT_FAIL,
      payload: error,
    });
  }
};
