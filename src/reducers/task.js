import {
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  SET_TASK_SUCCESS,
  SET_TASK_FAIL,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  GET_ROUTINES_TASK_SUCCESS,
  GET_ROUTINES_TASK_FAIL,
} from '../actions/types';

const initialState = {
  task: null,
  measurements: [],
  loading: true,
  message: '',
  error: null,
  routineslist: [],
  success: false,
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
        success: true,
        error: null,
      };
    case GET_TASK_FAIL:
      return {
        ...state,
        message: null,
        error: action.payload,
        loading: false,
        success: false,
      };
    case SET_TASK_SUCCESS:
      return {
        ...state,
        message: 'Your task was successfully added!',
        loading: false,
        success: true,
        error: null,
      };
    case SET_TASK_FAIL:
      return {
        ...state,
        message: '',
        error: action.payload,
        loading: false,
        success: false,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        message: 'Your task was successfully updated!',
        loading: false,
        success: true,
        error: null,
      };
    case UPDATE_TASK_FAIL:
      return {
        ...state,
        message: '',
        error: action.payload,
        loading: false,
        success: false,
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
    default:
      return state;
  }
};

export default taskReducer;
