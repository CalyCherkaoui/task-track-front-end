import { combineReducers } from 'redux';
import authentication from './authentication';
import message from './message';

const rootReducer = combineReducers({
  authentication,
  message,
});

export default rootReducer;
