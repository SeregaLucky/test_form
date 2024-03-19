/**
 * An object containing links to various page routes
 * @typedef {Object} RoutePaths
 * @property {Object} HOME - data for link
 * @property {string} HOME.path - Link to main page
 * @property {Object} AUTH - data for link
 * @property {string} AUTH.path - Link to auth route
 * @property {Object} AUTH.children - children auth pages
 * @property {Object} AUTH.children.LOGIN - data for link
 * @property {string} AUTH.children.LOGIN.path - Link to login page
 * @property {Object} AUTH.children.FORGOT_PASSWORD - data for link
 * @property {string} AUTH.children.FORGOT_PASSWORD.path - Link to forgot-password page
 * @property {Object} AUTH.children.RESET_PASSWORD - data for link
 * @property {string} AUTH.children.RESET_PASSWORD.path - Link to reset-password page
 * @property {Object} AUTH.children.REGISTRATION - data for link
 * @property {string} AUTH.children.REGISTRATION.path - Link to registration page
 */

/**
 * An object with links to page routes
 * @type {RoutePaths}
 */
export const PATHS = {
  HOME: { path: '/' },

  AUTH: {
    path: '/auth',

    children: {
      LOGIN: { path: '/auth/login' },
      FORGOT_PASSWORD: { path: '/auth/forgot-password' },
      RESET_PASSWORD: { path: '/auth/reset-password' },
      REGISTRATION: { path: '/auth/registration' },
    },
  },
};
