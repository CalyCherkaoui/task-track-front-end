import { combineReducers } from 'redux';
import authentication from './authentication';
import message from './message';
import profile from './profile';
import routines from './routines';
import task from './task';

const rootReducer = combineReducers({
  authentication,
  message,
  profile,
  routines,
  task,
});

export default rootReducer;
