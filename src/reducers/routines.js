import {
  GET_ROUTINE_SUCCESS,
  GET_ROUTINE_FAIL,
  GET_ROUTINES_SUCCESS,
  GET_ROUTINES_FAIL,
} from '../actions/types';

const initialState = {
  routine: {},
  routines: {},
};

const routinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTINE_SUCCESS:
      return {
        ...state,
        routine: action.payload,
      };
    case GET_ROUTINE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ROUTINES_SUCCESS:
      return {
        ...state,
        routines: action.payload,
      };
    case GET_ROUTINES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default routinesReducer;
