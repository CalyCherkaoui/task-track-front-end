import {
  GET_ROUTINE_SUCCESS,
  GET_ROUTINE_FAIL,
  GET_ROUTINES_SUCCESS,
  GET_ROUTINES_FAIL,
} from '../actions/types';

const initialState = {
  routine_tasks: [],
  routines: {},
  loading: true,
};

const routinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTINE_SUCCESS:
      return {
        ...state,
        routine_tasks: action.payload.data,
        loading: false,
      };
    case GET_ROUTINE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_ROUTINES_SUCCESS:
      return {
        ...state,
        routines: action.payload.data,
        loading: false,
      };
    case GET_ROUTINES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default routinesReducer;
