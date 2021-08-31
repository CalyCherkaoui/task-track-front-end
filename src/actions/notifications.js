import { SET_MESSAGE, CLEAR_MESSAGE } from './types';

export const setNotification = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearNotification = () => ({
  type: CLEAR_MESSAGE,
});
