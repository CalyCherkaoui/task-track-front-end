/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import API_ROOT from '../constantes/api';

import {
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  SET_TASK_SUCCESS,
  SET_TASK_FAIL,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  GET_ROUTINES_TASK_SUCCESS,
  GET_ROUTINES_TASK_FAIL,
} from './types';

export const getTask = (taskid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}tasks/${taskid}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('task get success');
    console.log(response.data);

    dispatch({
      type: GET_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASK_FAIL,
      payload: error,
    });
    console.log('task error');
    console.log(error);
  }
};

export const setTask = (
  name,
  priority,
  goal,
  unity,
  routine_id,
) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');

  const taskData = {
    name,
    priority,
    goal,
    unity,
    routine_id,
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(`${API_ROOT}tasks`, { task: taskData }, { headers });

    console.log('task create');
    console.log(response.data);

    dispatch({
      type: SET_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_TASK_FAIL,
      payload: error,
    });
    console.log('task create errors');
    console.log(error);
  }
};

export const updateTask = (
  taskid,
  name,
  priority,
  goal,
  unity,
  routine_id,
) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');

  const taskData = {
    name,
    priority,
    goal,
    unity,
    routine_id,
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.put(`${API_ROOT}tasks/${taskid}`, { task: taskData }, { headers });

    console.log('task update');
    console.log(response.data);

    dispatch({
      type: UPDATE_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TASK_FAIL,
      payload: error,
    });
    console.log('task update errors');
    console.log(error);
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

    console.log('allroutines get success');
    console.log(response.data);

    dispatch({
      type: GET_ROUTINES_TASK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROUTINES_TASK_FAIL,
      payload: error,
    });
    console.log('allroutines error');
    console.log(error);
  }
};
