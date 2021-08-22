/* eslint-disable no-console */
import axios from 'axios';
import API_ROOT from '../constantes/api';
import authHeader from '../services/auth-header';

import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from './types';

const getProfile = (userid) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_ROOT}users/${userid}`,
      { headers: authHeader() },
    );
    console.log(response.data.headers.authorization);
    console.log(response.headers.authorization);

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

export default getProfile;
