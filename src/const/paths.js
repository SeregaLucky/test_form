/**
 * Paths for routes
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
