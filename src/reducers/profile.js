import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from '../actions/types';

const initialState = {
  profile: null,
  herotask: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload.data,
        herotask: action.payload.included,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
        profile: null,
        herotask: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
