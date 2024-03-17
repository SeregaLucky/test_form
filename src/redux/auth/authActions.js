import authTypes from './authTypes';

/* LOGIN USER */
const loginUserStart = () => ({
  type: authTypes.LOGIN_START,
});

const loginUserSuccess = (currentUser) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: { currentUser },
});

const loginUserFailure = (error) => ({
  type: authTypes.LOGIN_FAILURE,
  payload: { error },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
};
