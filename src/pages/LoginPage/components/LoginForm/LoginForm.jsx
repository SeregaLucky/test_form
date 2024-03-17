import { Link } from 'react-router-dom';

import Input from 'ui/Input';
import Button from 'ui/Button';

import { useLoginForm } from './useLoginForm';

import { Urls } from 'helpers/urls';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const { register, isLoading, errors, onSubmit } = useLoginForm();

  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <div className={styles.containerInputs}>
        <Input
          type="text"
          placeholder="Work email"
          register={register('email')}
          error={errors.email}
        />

        <Input
          type="password"
          placeholder="Password"
          register={register('password')}
          error={errors.password}
        />
      </div>

      <Link
        className={styles.forgotPasswordLink}
        to={Urls.getForgotPasswordURL()}
      >
        Forgot your password?
      </Link>

      <Button type="submit" classTypeButton="filled" disabled={isLoading}>
        Log in to Qencode
      </Button>
    </form>
  );
};

export default LoginForm;
