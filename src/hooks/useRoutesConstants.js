import { useRoutes } from 'react-router';

import { PATHS } from 'const/paths';

import RedirectToLogin from 'components/Redirects/RedirectToLogin';
import LoginPage from 'pages/LoginPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import RegistrationPage from 'pages/RegistrationPage';

export const useRoutesConstants = () => {
  const routes = useRoutes([
    {
      path: PATHS.HOME.path,
      element: <RedirectToLogin />,
    },

    /* AUTH */
    {
      path: PATHS.AUTH.path,
      element: <RedirectToLogin />,
    },
    {
      path: PATHS.AUTH.children.LOGIN.path,
      element: <LoginPage />,
    },
    {
      path: PATHS.AUTH.children.RESET_PASSWORD.path,
      element: <ResetPasswordPage />,
    },
    {
      path: PATHS.AUTH.children.FORGOT_PASSWORD.path,
      element: <ForgotPasswordPage />,
    },
    {
      path: PATHS.AUTH.children.REGISTRATION.path,
      element: <RegistrationPage />,
    },
  ]);

  return routes;
};
