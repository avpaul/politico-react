import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import {
  createUser, loginUser, updateProfile, fetchUserData,
} from '../../actions';
import localStorageMock from '../__mocks__/localStorage';
import * as TYPES from '../../actions-types';

const mockStore = configureStore([thunk]);
const store = mockStore({ user: {} });

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('Actions', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));

  it('should create a new user action', async () => {
    const user = {
      email: 'tester@test.com',
      password: 'testuser',
      confirmPassword: 'testuser',
    };

    const expectedAction = {
      type: TYPES.REDIRECT,
      payload: {
        to: '/login',
        message: 'Login to update your profile',
      },
    };

    moxios.stubRequest('https://peoplevote.herokuapp.com/api/v1/auth/signup', {
      status: 201,
      response: {
        status: 201,
        message: 'User created',
      },
    });

    return store.dispatch(createUser({ ...user })).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  it('create a user login success action', () => {
    moxios.stubRequest('https://peoplevote.herokuapp.com/api/v1/auth/login', {
      status: 200,
      response: {
        status: '200',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbW9AZW1haWwuY29tIiwibmFtZSI6InVuZGVmaW5lZCB1bmRlZmluZWQiLCJleHAiOjE1NjAwNzQ3NjAuNDE1LCJpYXQiOjE1NjAwNzI5NjAsImF1ZCI6Ii9hdXRoIn0.gjMcsFdU9VjbdgX_9axa9mIiIweX0D7RaKs4537I8L4',
        user: {
          firstName: 'av',
          lastName: 'paul',
          phoneNumber: '0788855000',
          userProfile: '',
          email: 'paul@test.com',
          party: 'fpr',
          address: 'KN 134 St3 Nyamirambo',
        },
      },
    });

    const expectedAction = [
      {
        type: TYPES.LOGIN_USER_SUCCESS,
        payload: {
          firstName: 'av',
          lastName: 'paul',
          phoneNumber: '0788855000',
          userProfile: '',
          email: 'paul@test.com',
          party: 'fpr',
          address: 'KN 134 St3 Nyamirambo',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbW9AZW1haWwuY29tIiwibmFtZSI6InVuZGVmaW5lZCB1bmRlZmluZWQiLCJleHAiOjE1NjAwNzQ3NjAuNDE1LCJpYXQiOjE1NjAwNzI5NjAsImF1ZCI6Ii9hdXRoIn0.gjMcsFdU9VjbdgX_9axa9mIiIweX0D7RaKs4537I8L4',
        },
      },
      {
        type: TYPES.REDIRECT,
        payload: {
          to: '/candidates',
        },
      },
    ];

    const user = {
      email: 'paul@test.com',
      password: 'asdfghjklertyui',
    };

    return store.dispatch(loginUser({ ...user })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should create a user profile update success action', () => {
    const user = {
      firstName: 'av',
      lastName: 'paul',
      phoneNumber: '0788855000',
      userProfile: '',
      email: 'paul@test.com',
      party: 'fpr',
      address: 'KN 134 St3 Nyamirambo',
    };

    const expectedAction = [
      {
        type: TYPES.UPDATE_PROFILE_SUCCESS,
        payload: {
          user,
          message: {
            text: 'Profile updated!',
            type: 'success',
          },
        },
      },
    ];
    moxios.stubRequest('https://peoplevote.herokuapp.com/api/v1/auth/update', {
      status: 200,
      response: {
        status: 200,
        user,
      },
    });

    return store.dispatch(updateProfile(user)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should create a fetch user success action', () => {
    Object.defineProperty(global, 'atob', {
      value: value => JSON.stringify({ exp: Date.now() / 6000000 }),
    });
    const expectedAction = [
      {
        type: TYPES.REDIRECT,
        payload: {
          to: '/login',
          message: 'Please login!',
        },
      },
    ];
    store.dispatch(fetchUserData());
    expect(store.getActions()).toEqual(expectedAction);
  });

  // it('should create a fetch user success action', () => {
  //   global.atob = value => JSON.stringify({ exp: Date.now() + 6000000 });

  //   const expectedAction = [
  //     {
  //       type: TYPES.FETCH_USER_SUCCESS,
  //       payload: expect.objectContaining({
  //         firstName: 'av',
  //         lastName: 'paul',
  //         phoneNumber: '0788855000',
  //       }),
  //     },
  //   ];
  //   store.dispatch(fetchUserData());
  //   expect(store.getActions()).toEqual(expectedAction);
  // });
});
