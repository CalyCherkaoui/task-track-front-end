/* eslint-disable camelcase */
import axios from 'axios';
import API_ROOT from '../constantes/api';

import {
  SET_ROUTINE_SUCCESS,
  SET_ROUTINE_FAIL,
  DELETE_ROUTINE_SUCCESS,
  DELETE_ROUTINE_FAIL,
  CLEAR_EDIT_ROUTINE_STATE,
} from './types';

export const setRoutine = (
  name,
  priority,
  icon,
) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');

  const routineData = {
    name,
    priority,
    icon,
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(`${API_ROOT}routines`, { routine: routineData }, { headers });
    dispatch({
      type: SET_ROUTINE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ROUTINE_FAIL,
      payload: error,
    });
  }
};

export const deleteRoutine = (routineid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');

  try {
    const response = await axios.delete(`${API_ROOT}routines/${routineid}`);
    dispatch({
      type: DELETE_ROUTINE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ROUTINE_FAIL,
      payload: error,
    });
  }
};

export const clearEditRoutineState = () => (dispatch) => {
  dispatch({
    type: CLEAR_EDIT_ROUTINE_STATE,
  });
};
