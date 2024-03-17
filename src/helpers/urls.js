import { PATHS } from 'const/paths';

/**
 * ===> Use in "to" in components Link, NavLink and Navigate <===
 * ===> Use in navigate() from useNavigate <===
 */
export const Urls = {
  /* AUTH */
  getLoginURL() {
    return PATHS.AUTH.children.LOGIN.path;
  },

  getForgotPasswordURL() {
    return PATHS.AUTH.children.FORGOT_PASSWORD.path;
  },

  getResetPasswordURL() {
    return PATHS.AUTH.children.RESET_PASSWORD.path;
  },

  getRegistrationURL() {
    return PATHS.AUTH.children.REGISTRATION.path;
  },
};
