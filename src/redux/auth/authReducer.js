import { combineReducers } from 'redux';

import todoTypes from './authTypes';

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case todoTypes.LOGIN_SUCCESS:
      return payload.currentUser;

    default:
      return state;
  }
};

const isLoginLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case todoTypes.LOGIN_START:
      return true;

    case todoTypes.LOGIN_SUCCESS:
    case todoTypes.LOGIN_FAILURE:
      return false;

    default:
      return state;
  }
};

const loginErrorReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case todoTypes.LOGIN_FAILURE:
      return payload.error;

    case todoTypes.LOGIN_START:
      return {};

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  isLoginLoading: isLoginLoadingReducer,
  loginError: loginErrorReducer,
});
