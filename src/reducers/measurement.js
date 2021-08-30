import {
  GET_MEASUREMENT_SUCCESS,
  GET_MEASUREMENT_FAIL,
  SET_MEASUREMENT_SUCCESS,
  SET_MEASUREMENT_FAIL,
  GET_TASKS_MEASUREMENT_SUCCESS,
  GET_TASKS_MEASUREMENT_FAIL,
  CLEAR_EDIT_MEASUREMENT_STATE,
} from '../actions/types';

const initialState = {
  measurement: null,
  loading: true,
  error: null,
  taskslist: null,
  edit_success: false,
};

const measurementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEASUREMENT_SUCCESS:
      return {
        ...state,
        measurement: action.payload.data,
        loading: false,
        edit_success: false,
        error: null,
      };
    case GET_MEASUREMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        edit_success: false,
      };
    case SET_MEASUREMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        edit_success: true,
        error: null,
      };
    case SET_MEASUREMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        edit_success: false,
      };
    case GET_TASKS_MEASUREMENT_SUCCESS:
      return {
        ...state,
        taskslist: action.payload,
        loading: false,
      };
    case GET_TASKS_MEASUREMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_EDIT_MEASUREMENT_STATE:
      return {
        ...state,
        measurement: null,
        loading: false,
        edit_success: false,
        error: null,
      };
    default:
      return state;
  }
};

export default measurementReducer;
