import adminBorad from '../../reducers/adminBorad';
import {
  SET_ROUTINE_SUCCESS,
  DELETE_ROUTINE_SUCCESS,
  CLEAR_EDIT_ROUTINE_STATE,
} from '../../actions/types';

describe(
  'User data response reducer for authentication',
  () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        loading: true,
        error: null,
        edit_success: false,
        deleted: false,
      };
    });

    test('It should set initial state by default',
      () => {
        const state = adminBorad(initialState, { type: '@@INIT' });
        expect(state).toEqual(initialState);
      });

    test('It Should set edit_success true in the store whene creating a routine',
      () => {
        const action = {
          type: SET_ROUTINE_SUCCESS,
        };

        const state = adminBorad(initialState, action);

        expect(state.edit_success).toBeTruthy();
      });

    test('It Should set deleted true in the store whene deleting a routine',
      () => {
        const action = {
          type: DELETE_ROUTINE_SUCCESS,
        };

        const state = adminBorad(initialState, action);

        expect(state.deleted).toBeTruthy();
      });

    test('It Should set edit_succes and deleted to false in the store whene clearing edit mode',
      () => {
        const action = {
          type: CLEAR_EDIT_ROUTINE_STATE,
        };

        const state = adminBorad(initialState, action);

        expect(state.edit_success).not.toBeTruthy();
        expect(state.deleted).not.toBeTruthy();
      });
  },
);
