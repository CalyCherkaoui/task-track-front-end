import { combineReducers } from 'redux';
import authentication from './authentication';
import message from './message';

export default combineReducers({
  authentication,
  message,
});
