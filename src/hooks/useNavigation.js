import { useNavigate } from 'react-router';

import { Urls } from 'helpers/urls';

/**
 * The functions that it returns can be used, for example,
 * on a click event or inside react effects
 */
export const useNavigation = () => {
  const navigate = useNavigate();

  /* METHODS */

  const goToLogin = () => navigate(Urls.getLoginURL());

  return {
    goToLogin,
  };
};
