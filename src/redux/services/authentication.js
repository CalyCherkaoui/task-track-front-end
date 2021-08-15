import userActions from '../actions/UserActions';
import { postRequest } from '../helpers/apiRequests';
// import history from '../helpers/history';

const userLogin = (userData) => async (dispatch) => {
  const path = 'login';
  dispatch(userActions.loginRequest());

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const result = await postRequest(path, { user: userData }, headers);
    dispatch(userActions.loginSuccessfully(result.data));
    // window.location.href = '/';
    window.location.reload();
    // history.push('/');
  } catch (error) {
    dispatch(userActions.loginFail(error));
  }
};

export default userLogin;
