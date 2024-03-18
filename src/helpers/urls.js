import { PATHS } from 'const/paths';

/**
 * An object containing functions to retrieve page URLs
 * @typedef {Object} Urls
 * @property {function(): string} getLoginURL - Function to get the login page URL
 * @property {function(): string} getRegistrationURL - Function to get the registration page URL
 * @property {function(): string} getForgotPasswordURL - Function to get the forgot password page URL
 * @property {function(): string} getResetPasswordURL - Function to get the reset password page URL
 */

/**
 * An object containing functions to retrieve page URLs.
 * ===> Use in "to" in components Link, NavLink and Navigate <===
 * ===> Use in navigate() from useNavigate <===
 * @type {Urls}
 */
export const Urls = {
  /* AUTH */
  getLoginURL() {
    return PATHS.AUTH.children.LOGIN.path;
  },

  getRegistrationURL() {
    return PATHS.AUTH.children.REGISTRATION.path;
  },

  getForgotPasswordURL() {
    return PATHS.AUTH.children.FORGOT_PASSWORD.path;
  },

  getResetPasswordURL() {
    return PATHS.AUTH.children.RESET_PASSWORD.path;
  },
};
