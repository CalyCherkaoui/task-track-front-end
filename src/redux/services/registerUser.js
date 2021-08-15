/* eslint-disable no-console */
// import axios from 'axios';
import userActions from '../actions/UserActions';
import { postRequest } from '../helpers/apiRequests';

const userSignup = (userData) => async (dispatch) => {
  const path = 'register';
  dispatch(userActions.signupRequest());

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    // const result = await axios.post('http://localhost:3001/api/v1/register', { user: userData }, headers);
    const result = await postRequest(path, { user: userData }, headers);
    dispatch(userActions.signupSuccessfully(result.data));
    console.log(result);
    window.location.href = '/';
    // window.location.reload();
  } catch (error) {
    dispatch(userActions.signupFail(error));
    console.log(error);
  }
};

export default userSignup;
