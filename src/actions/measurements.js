/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import API_ROOT from '../constantes/api';

import {
  GET_MEASUREMENT_SUCCESS,
  GET_MEASUREMENT_FAIL,
  SET_MEASUREMENT_SUCCESS,
  SET_MEASUREMENT_FAIL,
  GET_TASKS_MEASUREMENT_SUCCESS,
  GET_TASKS_MEASUREMENT_FAIL,
  CLEAR_EDIT_MEASUREMENT_STATE,
} from './types';

export const getMeasurement = (measureid) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}mesurements/${measureid}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('measurement get success');
    console.log(response.data);

    dispatch({
      type: GET_MEASUREMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MEASUREMENT_FAIL,
      payload: error,
    });
    console.log('task error');
    console.log(error);
  }
};

export const setMeasurement = (
  quantity,
  task_id,
) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');

  const measurementData = {
    quantity,
    task_id,
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(`${API_ROOT}tasks`, { mesurement: measurementData }, { headers });

    console.log('measurement create');
    console.log(response.data);

    dispatch({
      type: SET_MEASUREMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_MEASUREMENT_FAIL,
      payload: error,
    });
    console.log('mEASUREMENT create errors');
    console.log(error);
  }
};

export const getAllTasks = () => async (dispatch) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem('token');
  try {
    const response = await axios.get(`${API_ROOT}alltasks`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('alltasks get success');
    console.log(response.data);

    sessionStorage.setItem('taskslist', response.data);

    dispatch({
      type: GET_TASKS_MEASUREMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_MEASUREMENT_FAIL,
      payload: error,
    });
    console.log('alltasks error');
    console.log(error);
  }
};

export const clearEditMeasurementState = () => (dispatch) => {
  dispatch({
    type: CLEAR_EDIT_MEASUREMENT_STATE,
  });
};
