/**
 * An object containing links to various page routes
 * @typedef {Object} RoutePaths
 * @property {Object} HOME - Link to main page
 * @property {Object} AUTH - Links to auth route
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
