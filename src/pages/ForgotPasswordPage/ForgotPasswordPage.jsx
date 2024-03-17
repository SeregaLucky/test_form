import Input from 'ui/Input';
import Button from 'ui/Button';
import AuthWrapper from 'components/AuthWrapper';

import { useForgotPasswordForm } from './useForgotPasswordForm';

import { useNavigation } from 'hooks/useNavigation';

import styles from './ForgotPasswordPage.module.scss';

const ForgotPasswordPage = () => {
  const { register, isLoading, errors, onSubmit } = useForgotPasswordForm();

  const { goToLogin } = useNavigation();

  return (
    <AuthWrapper titlePage="Forgot Password?">
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Enter your email"
          register={register('email')}
          error={errors.email}
        />

        <div className={styles.controllers}>
          <Button type="submit" classTypeButton="filled" disabled={isLoading}>
            Send
          </Button>

          <Button type="button" classTypeButton="empty" onClick={goToLogin}>
            Cancel
          </Button>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default ForgotPasswordPage;
