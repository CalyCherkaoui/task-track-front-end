import routineFixture from '../fixtures/routineFixt';
import routinesFixture from '../fixtures/routinesFixt';
import routineReducer from '../../reducers/routines';
import {
  GET_ROUTINE_SUCCESS,
  GET_ROUTINES_SUCCESS,
} from '../../actions/types';

describe(
  'Routine data response reducer',
  () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        routine_tasks: [],
        routines: {},
        loading: true,
      };
    });

    test('It should set initial state by default',
      () => {
        const state = routineReducer(initialState, { type: '@@INIT' });
        expect(state).toEqual(initialState);
      });

    test('It Should set a routine\'s tasks list in the store whene making GET Routines/:id request',
      () => {
        const action = {
          type: GET_ROUTINE_SUCCESS,
          payload: routineFixture,
        };

        const state = routineReducer(initialState, action);

        expect(state.routine_tasks).toMatchObject(action.payload.data);
      });

    test('It Should set a routines list in the store whene making GET /Routines request',
      () => {
        const action = {
          type: GET_ROUTINES_SUCCESS,
          payload: routinesFixture,
        };
        const state = routineReducer(initialState, action);

        expect(state.routines).toMatchObject(action.payload.data);
      });
  },
);
