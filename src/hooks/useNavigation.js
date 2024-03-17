import { useNavigate } from 'react-router';

import { Urls } from 'helpers/urls';

export const useNavigation = () => {
  const navigate = useNavigate();

  /* METHODS */

  const goToLogin = () => navigate(Urls.getLoginURL());

  return {
    goToLogin,
  };
};
