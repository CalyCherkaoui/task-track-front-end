import userFixt from '../../fixtures/userFixt';
import autheticationReducer from '../../reducers/authentication';
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../actions/types';

describe(
  'User data response reducer for authentication',
  () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        user: {},
        id: null,
        admin: false,
        isLoggedIn: false,
        error: '',
        message: '',
      };
    });

    test('It should set initial state by default',
      () => {
        const state = autheticationReducer(initialState, { type: '@@INIT' });
        expect(state).toEqual(initialState);
      });

    test('It Should set a user in the store when login',
      () => {
        const action = {
          type: LOGIN_SUCCESS,
          payload: userFixt,
        };

        const state = autheticationReducer(initialState, action);

        expect(state.user).toMatchObject(action.payload.data);
      });

    test('It Should set a user in the store when signup',
      () => {
        const action = {
          type: REGISTER_SUCCESS,
          payload: userFixt,
        };

        const state = autheticationReducer(initialState, action);

        expect(state.user).toMatchObject(action.payload.data);
      });

    test('It Should set user to null in the store when logout',
      () => {
        const action = {
          type: LOGOUT,
          payload: {
            message: 'logged out',
          },
        };

        const state = autheticationReducer(initialState, action);

        expect(state.message).toMatch(action.payload.message);
        expect(state.user).toEqual(null);
      });
  },
);
