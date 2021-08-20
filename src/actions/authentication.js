/* eslint-disable max-len */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_FAIL,
} from './types';

import AuthenticationService from '../services/authentication.service';

export const register = (username, email, password) => (dispatch) => AuthenticationService.register(username, email, password).then(
  (response) => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user: response.data },
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message, // verify how errors are handled in the backend
    });

    return Promise.resolve();
  },
  (error) => {
    const message = error; // verify how errors are handled in the backend

    dispatch({
      type: REGISTER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const login = (username, email, password) => (dispatch) => AuthenticationService.login(username, email, password).then(
  (data) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: data },
    });

    return Promise.resolve();
  },
  (error) => {
    const message = error;

    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const logout = () => (dispatch) => AuthenticationService.logout().then(
  (data) => {
    dispatch({
      type: LOGOUT,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: data,
    });

    return Promise.resolve();
  },
  (error) => {
    const message = error;

    dispatch({
      type: LOGOUT_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);
