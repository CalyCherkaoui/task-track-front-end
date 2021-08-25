import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

const user = JSON.parse(sessionStorage.getItem('user'));

const initialState = user
  ? {
    isLoggedIn: true, user, error: {}, message: {},
  }
  : {
    isLoggedIn: false, user: null, error: {}, message: {},
  };

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
