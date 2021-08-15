import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../constants/userTypes';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccessfully = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFail = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signupSuccessfully = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

const signupFail = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

const userActions = {
  loginRequest,
  loginSuccessfully,
  loginFail,
  signupRequest,
  signupSuccessfully,
  signupFail,
};

export default userActions;
