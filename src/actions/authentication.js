import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

import AuthenticationService from '../services/authentication.service';

export const register = (username, email, password) => (dispatch) => AuthenticationService.register(username, email, password).then(
  (response) => {
    dispatch({
      type: REGISTER_SUCCESS,
    });

    return Promise.resolve();
  },
  (error) => {
    const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.detail
        || error.toString(); // verify this with backend responses

    dispatch({
      type: REGISTER_FAIL,
    });

    dispatch({
      // type: MESSAGE, type set_message to be implemneted
      payload: message,
    });

    return Promise.reject();
  },
);
