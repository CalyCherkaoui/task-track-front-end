import {
  SET_ROUTINE_SUCCESS,
  SET_ROUTINE_FAIL,
  DELETE_ROUTINE_SUCCESS,
  DELETE_ROUTINE_FAIL,
  CLEAR_EDIT_ROUTINE_STATE,
} from '../actions/types';

const initialState = {
  // routine: null,
  loading: true,
  error: null,
  edit_success: false,
  deleted: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTINE_SUCCESS:
      return {
        ...state,
        loading: false,
        edit_success: true,
        error: null,
        deleted: false,
      };
    case SET_ROUTINE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        edit_success: false,
        deleted: false,
      };
    case DELETE_ROUTINE_SUCCESS:
      return {
        ...state,
        loading: false,
        edit_success: false,
        error: null,
        deleted: true,
      };
    case DELETE_ROUTINE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        edit_success: false,
        deleted: false,
      };
    case CLEAR_EDIT_ROUTINE_STATE:
      return {
        ...state,
        // routine: null,
        loading: false,
        edit_success: false,
        error: null,
        deleted: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
