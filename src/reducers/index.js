import * as TYPES from '../actions-types';
import initialState from '../store/initialState';

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.CREATE_USER_SUCCESS:
    case TYPES.LOGIN_USER_SUCCESS:
    case TYPES.FETCH_USER_SUCCESS:
      return { ...state, user: payload };

    case TYPES.UPDATE_PROFILE_FAIL:
    case TYPES.CREATE_USER_FAIL:
    case TYPES.LOGIN_USER_FAIL:
      return { ...state, errors: payload };

    case TYPES.UPDATE_PROFILE_SUCCESS:
      return { ...state, user: payload.user, message: payload.message };

    case TYPES.REDIRECT:
      return { ...state, redirectTo: payload };

    default:
      return state;
  }
}
