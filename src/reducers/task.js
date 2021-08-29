import {
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  SET_TASK_SUCCESS,
  SET_TASK_FAIL,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  GET_ROUTINES_TASK_SUCCESS,
  GET_ROUTINES_TASK_FAIL,
  CLEAR_EDIT_TASK_STATE,
} from '../actions/types';

const initialState = {
  task: null,
  measurements: null,
  loading: true,
  message: '',
  error: null,
  routineslist: null,
  edit_success: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_SUCCESS:
      return {
        ...state,
        task: action.payload.data,
        message: '',
        measurements: action.payload.included,
        loading: false,
        edit_success: false,
        error: null,
      };
    case GET_TASK_FAIL:
      return {
        ...state,
        message: null,
        error: action.payload,
        loading: false,
        edit_success: false,
      };
    case SET_TASK_SUCCESS:
      return {
        ...state,
        message: 'Your task was successfully added!',
        loading: false,
        edit_success: true,
        error: null,
      };
    case SET_TASK_FAIL:
      return {
        ...state,
        message: '',
        error: action.payload,
        loading: false,
        edit_success: false,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        message: 'Your task was successfully updated!',
        loading: false,
        edit_success: true,
        error: null,
      };
    case UPDATE_TASK_FAIL:
      return {
        ...state,
        message: '',
        error: action.payload,
        loading: false,
        edit_success: false,
      };
    case GET_ROUTINES_TASK_SUCCESS:
      return {
        ...state,
        message: '',
        routineslist: action.payload,
        loading: false,
      };
    case GET_ROUTINES_TASK_FAIL:
      return {
        ...state,
        message: '',
        error: action.payload,
        loading: false,
      };
    case CLEAR_EDIT_TASK_STATE:
      return {
        ...state,
        task: null,
        message: null,
        measurements: null,
        loading: false,
        edit_success: false,
        error: null,
      };
    default:
      return state;
  }
};

export default taskReducer;
