import axios from 'axios';
import API_ROOT from '../constantes/api';

import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from './types';

const getProfile = (userid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}users/${userid}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error,
    });
  }
};

export default getProfile;
