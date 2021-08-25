import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from '../actions/types';

const initialState = {
  profile: {},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;