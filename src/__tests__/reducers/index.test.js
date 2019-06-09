import reducers from '../../reducers';
import * as TYPES from '../../actions-types';

describe('reducers', () => {
  const initialState = {
    user: {},
    errors: '',
    message: {},
    redirectTo: {},
    parties: [],
    candidates: [],
  };

  it('should return the initial state', () => {
    expect(reducers(initialState, {})).toEqual(initialState);
  });

  it('should update the redirect object', () => {
    const expectedState = {
      ...initialState,
      redirectTo: { to: '/login', message: 'Login to update your profile' },
    };
    expect(
      reducers(initialState, {
        type: TYPES.REDIRECT,
        payload: { to: '/login', message: 'Login to update your profile' },
      }),
    ).toEqual(expectedState);
  });

  it('should update the user object', () => {
    const user = {
      email: 'tester@test.com',
      firstName: 'mark',
      lastName: 'otto',
      party: 'fpr',
    };
    const expectedState = { ...initialState, user };
    expect(reducers(initialState, { type: TYPES.CREATE_USER_SUCCESS, payload: user })).toEqual(
      expectedState,
    );
    expect(reducers(initialState, { type: TYPES.FETCH_USER_SUCCESS, payload: user })).toEqual(
      expectedState,
    );
    expect(reducers(initialState, { type: TYPES.LOGIN_USER_SUCCESS, payload: user })).toEqual(
      expectedState,
    );
  });

  it('should update the error object', () => {
    const errors = "User with this email doesn't exist";
    const expectedState = { ...initialState, errors };
    expect(reducers(initialState, { type: TYPES.CREATE_USER_FAIL, payload: errors })).toEqual(
      expectedState,
    );
    expect(reducers(initialState, { type: TYPES.LOGIN_USER_FAIL, payload: errors })).toEqual(
      expectedState,
    );
    expect(reducers(initialState, { type: TYPES.UPDATE_PROFILE_FAIL, payload: errors })).toEqual(
      expectedState,
    );
  });

  it('should update the user and message object', () => {
    const message = { text: 'Profile updated', type: 'success' };
    const user = {
      email: 'tester@test.com',
      firstName: 'mark',
      lastName: 'otto',
      party: 'fpr',
    };
    const expectedState = { ...initialState, user, message };
    expect(
      reducers(initialState, { type: TYPES.UPDATE_PROFILE_SUCCESS, payload: { user, message } }),
    ).toEqual(expectedState);
  });
});
