import { useNavigate } from 'react-router';

import { Urls } from 'helpers/urls';

/**
 * Hook for navigating the application
 * The functions that it returns can be used, for example,
 * on a click event or inside react effects
 * @returns {Object} An object with navigation methods
 */
export const useNavigation = () => {
  const navigate = useNavigate();

  /* METHODS */

  const goToLogin = () => navigate(Urls.getLoginURL());

  return {
    goToLogin,
  };
};
