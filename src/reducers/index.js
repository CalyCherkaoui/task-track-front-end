import { combineReducers } from 'redux';
import authentication from './authentication';
import message from './message';
import profile from './profile';

const rootReducer = combineReducers({
  authentication,
  message,
  profile,
});

export default rootReducer;
