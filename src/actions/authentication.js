/* eslint-disable max-len */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
} from './types';

import AuthenticationService from '../services/authentication.service';

export const register = (username, email, password) => (dispatch) => AuthenticationService.register(username, email, password).then(
  (response) => {
    dispatch({
      type: REGISTER_SUCCESS,
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

export default { register };
