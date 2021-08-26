import { combineReducers } from 'redux';
import authentication from './authentication';
import message from './message';
import profile from './profile';
import routines from './routines';

const rootReducer = combineReducers({
  authentication,
  message,
  profile,
  routines,
});

export default rootReducer;
