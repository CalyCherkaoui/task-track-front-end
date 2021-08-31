import { combineReducers } from 'redux';
import authentication from './authentication';
import notification from './notification';
import profile from './profile';
import routines from './routines';
import task from './task';
import measurement from './measurement';
import admin from './adminBorad';

const rootReducer = combineReducers({
  authentication,
  notification,
  profile,
  routines,
  task,
  measurement,
  admin,
});

export default rootReducer;
