import { Link } from 'react-router-dom';

import AuthWrapper from 'components/AuthWrapper';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';

import { Urls } from 'helpers/urls';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <AuthWrapper titlePage="Log in to your account">
      <LoginHeader />
      <LoginForm />

      <p className={styles.textForSingUp}>
        Is your company new to Qencode?
        <Link className={styles.link} to={Urls.getRegistrationURL()}>
          {' '}
          Sign up
        </Link>
      </p>
    </AuthWrapper>
  );
};

export default LoginPage;
