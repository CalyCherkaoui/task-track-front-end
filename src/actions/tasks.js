/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import API_ROOT from '../constantes/api';

import {
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  SET_TASK_SUCCESS,
  SET_TASK_FAIL,
} from './types';

export const getTask = (taskid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}tasks/${taskid}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('task success');
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

    console.log('routine index');
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
