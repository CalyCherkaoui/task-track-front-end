/* eslint-disable no-console */
import axios from 'axios';
import API_ROOT from '../constantes/api';

import {
  GET_ROUTINE_SUCCESS,
  GET_ROUTINE_FAIL,
  GET_ROUTINES_SUCCESS,
  GET_ROUTINES_FAIL,
} from './types';

export const getRoutine = (routineid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}routines/${routineid}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('routine success');
    console.log(response.data);

    dispatch({
      type: GET_ROUTINE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROUTINE_FAIL,
      payload: error,
    });
    console.log('routine error');
    console.log(error);
  }
};

export const getRoutines = () => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');

  try {
    const response = await axios.get(`${API_ROOT}routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('routine index');
    console.log(response.data);

    dispatch({
      type: GET_ROUTINES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROUTINES_FAIL,
      payload: error,
    });
    console.log('routine index errors');
    console.log(error);
  }
};
