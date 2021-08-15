import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import signupReducer from './reducers/signupReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

export default rootReducer;
