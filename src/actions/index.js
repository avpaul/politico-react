import axios from 'axios';
import {} from 'react-router-dom';
import * as Types from '../actions-types';

/**
 * helpers
 */

export function verifyToken() {
  const token = localStorage.getItem('token');
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (Date.now() > payload.exp * 1000) {
      return false;
    } return true;
  }
  return false;
}

/**
 *
 * action creators
 */

export function loginUser({ email, password }) {
  return dispatch => axios
    .post('https://peoplevote.herokuapp.com/api/v1/auth/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        user.token = token;
        dispatch({
          type: Types.LOGIN_USER_SUCCESS,
          payload: user,
        });
        if (!user.lastName || !user.firstName) {
          // redirect the user to the profile page to complete the profile information
          // add message to update profile
          dispatch({
            type: Types.REDIRECT,
            payload: {
              to: '/profile',
            },
          });
        } else {
          dispatch({
            type: Types.REDIRECT,
            payload: {
              to: '/candidates',
            },
          });
        }
      }
    })
    .catch((error) => {
      const { data } = error.response;
      dispatch({
        type: Types.LOGIN_USER_FAIL,
        payload: data.error || 'SignIn failed, please tyr again!',
      });
    });
}

export function createUser({ email, password, confirmPassword }) {
  return dispatch => axios
    .post('https://peoplevote.herokuapp.com/api/v1/auth/signup', {
      email,
      password,
      confirmPassword,
    })
    .then((response) => {
      // dispatch({
      //   type: Types.LOGIN_USER_SUCCESS,
      //   payload: user,
      // });
      if (response.status === 201) {
        dispatch({
          type: Types.REDIRECT,
          payload: {
            to: '/login',
            message: 'Login to update your profile',
          },
        });
      }
    })
    .catch((error) => {
      const { data } = error.response;

      dispatch({
        type: Types.CREATE_USER_FAIL,
        payload: data.error || 'SignUp failed, please tyr again!',
      });
    });
}

export function updateProfile({
  firstName,
  lastName,
  phoneNumber,
  userProfile,
  email,
  party,
  address,
}) {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    return axios
      .put(
        'https://peoplevote.herokuapp.com/api/v1/auth/update',
        {
          firstName,
          lastName,
          phoneNumber,
          userProfile,
          email,
          party,
          address,
        },
        { headers: { authorization: `Bearer ${token}` } },
      )
      .then((response) => {
        const { user } = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: Types.UPDATE_PROFILE_SUCCESS,
          payload: {
            user,
            message: {
              text: 'Profile updated!',
              type: 'success',
            },
          },
        });
      })
      .catch((error) => {
        const { data } = error.response;
        dispatch({
          type: Types.UPDATE_PROFILE_FAIL,
          payload: {
            message: data.error || 'Profile update failed',
            type: 'error',
          },
        });
      });
  };
}

export function fetchUserData() {
  return (dispatch) => {
    let user = {};
    if (verifyToken()) {
      user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: Types.FETCH_USER_SUCCESS,
        payload: user,
      });
    } else {
      dispatch({
        type: Types.REDIRECT,
        payload: {
          to: '/login',
          message: 'Please login!',
        },
      });
    }
  };
}
