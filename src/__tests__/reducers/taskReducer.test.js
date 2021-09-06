import taskFixture from '../fixtures/taskFixt';
import taskReducer from '../../reducers/task';
import {
  GET_TASK_SUCCESS,
  SET_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  GET_ROUTINES_TASK_SUCCESS,
  CLEAR_EDIT_TASK_STATE,
} from '../../actions/types';
import allRoutinesDataFixture from '../fixtures/allroutineFixt';

describe(
  'Task data response reducer',
  () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        task: null,
        measurements: null,
        loading: true,
        message: '',
        error: null,
        routineslist: null,
        edit_success: false,
        deleted: false,
      };
    });

    test('It should set initial state by default',
      () => {
        const state = taskReducer(initialState, { type: '@@INIT' });
        expect(state).toEqual(initialState);
      });

    test('It Should set a task in the store whene making GET Tasks/:id request',
      () => {
        const action = {
          type: GET_TASK_SUCCESS,
          payload: taskFixture,
        };

        const state = taskReducer(initialState, action);

        expect(state.task).toMatchObject(action.payload.data);
      });

    test('It Should set edit_success to true in the store whene making POST Tasks/ request',
      () => {
        const action = {
          type: SET_TASK_SUCCESS,
        };

        const state = taskReducer(initialState, action);

        expect(state.edit_success).toBeTruthy();
      });

    test('It Should set deleted to true in the store whene making DEL Tasks/:id request',
      () => {
        const action = {
          type: DELETE_TASK_SUCCESS,
        };

        const state = taskReducer(initialState, action);

        expect(state.deleted).toBeTruthy();
      });

    test('It Should set Task & measurements to null in the store whene clearing the task state',
      () => {
        const action = {
          type: CLEAR_EDIT_TASK_STATE,
        };

        const state = taskReducer(initialState, action);

        expect(state.task).toEqual(null);
        expect(state.measurements).toEqual(null);
      });

    test('It Should set routineList in the store whene making GET /allroutines request',
      () => {
        const action = {
          type: GET_ROUTINES_TASK_SUCCESS,
          payload: allRoutinesDataFixture,
        };

        const state = taskReducer(initialState, action);

        expect(state.routineslist).toMatchObject(action.payload);
      });
  },
);
