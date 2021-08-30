import { combineReducers } from 'redux';
import authentication from './authentication';
import message from './message';
import profile from './profile';
import routines from './routines';
import task from './task';
import measurement from './measurement';
import admin from './adminBorad';

const rootReducer = combineReducers({
  authentication,
  message,
  profile,
  routines,
  task,
  measurement,
  admin,
});

export default rootReducer;
