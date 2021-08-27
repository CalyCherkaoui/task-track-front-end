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
  task: {},
  measurements: [],
  loading: true,
  message: '',
  routineslist: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_SUCCESS:
      return {
        ...state,
        task: action.payload.data,
        measurements: action.payload.included,
        loading: false,
      };
    case GET_TASK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_TASK_SUCCESS:
      return {
        ...state,
        message: 'Your task was successfully added!',
        loading: false,
      };
    case SET_TASK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        message: 'Your task was successfully updated!',
        loading: false,
      };
    case UPDATE_TASK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_ROUTINES_TASK_SUCCESS:
      return {
        ...state,
        routineslist: action.payload,
        loading: false,
      };
    case GET_ROUTINES_TASK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default taskReducer;
