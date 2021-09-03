/* eslint-disable camelcase */
import axios from 'axios';
import API_ROOT from '../constantes/api';

import {
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  SET_TASK_SUCCESS,
  SET_TASK_FAIL,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  GET_ROUTINES_TASK_SUCCESS,
  GET_ROUTINES_TASK_FAIL,
  CLEAR_EDIT_TASK_STATE,
} from './types';

export const getTask = (taskid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}tasks/${taskid}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: GET_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASK_FAIL,
      payload: error,
    });
  }
};

export const setTask = (
  name,
  priority,
  goal,
  unit,
  routine_id,
) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');

  const taskData = {
    name,
    priority,
    goal,
    unit,
    routine_id,
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(`${API_ROOT}tasks`, { task: taskData }, { headers });

    dispatch({
      type: SET_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_TASK_FAIL,
      payload: error,
    });
  }
};

export const deleteTask = (taskid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.delete(`${API_ROOT}tasks/${taskid}`);
    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAIL,
      payload: error,
    });
  }
};

export const getAllroutines = () => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}allroutines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    sessionStorage.setItem('routineslist', response.data);

    dispatch({
      type: GET_ROUTINES_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROUTINES_TASK_FAIL,
      payload: error,
    });
  }
};

export const clearEditTaskState = () => (dispatch) => {
  dispatch({
    type: CLEAR_EDIT_TASK_STATE,
  });
};
