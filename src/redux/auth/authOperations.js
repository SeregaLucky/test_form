import { noticeError } from 'helpers/showNotices';
import { makeRequest } from '../../services/makeRequest';
import authActions from './authActions';
import ENDPOINTS from 'services/apiConstants';

const loginUser = (params) => async (dispatch) => {
  dispatch(authActions.loginUserStart());
  const { email, password } = params;

  try {
    const currentUser = await makeRequest({
      url: ENDPOINTS.AUTH.LOGIN,
      method: 'POST',
      data: { email, password },
    });

    // access_token token_expire refresh_token refresh_token_expire

    dispatch(
      authActions.loginUserSuccess({
        accessToken: currentUser.access_token,
        refreshToken: currentUser.refresh_token,
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
