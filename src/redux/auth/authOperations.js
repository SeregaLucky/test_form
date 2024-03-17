import { noticeError } from 'helpers/showNotices';

import authActions from './authActions';

import ENDPOINTS from 'services/apiConstants';
import { makeRequest } from 'services/makeRequest';

const loginUser = (params) => async (dispatch) => {
  dispatch(authActions.loginUserStart());
  const { email, password } = params;

  try {
    const currentUser = await makeRequest({
      url: ENDPOINTS.AUTH.LOGIN,
      method: 'POST',
      data: { email, password },
    });

    dispatch(
      authActions.loginUserSuccess({
        accessToken: currentUser.access_token,
        tokenExpire: currentUser.token_expire,
        refreshToken: currentUser.refresh_token,
        refresh_token_expire: currentUser.refresh_token_expire,
      }),
    );
  } catch (error) {
    noticeError(error.response.data.detail);
    dispatch(authActions.loginUserFailure(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginUser,
};
