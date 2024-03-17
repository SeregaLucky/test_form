import Button from 'ui/Button';
import LabelInput from 'ui/LabelInput';
import AuthWrapper from 'components/AuthWrapper';

import { useResetPasswordForm } from './useResetPasswordForm';

import styles from './ResetPasswordPage.module.scss';

const ResetPasswordPage = () => {
  const { register, isLoading, errors, onSubmit } = useResetPasswordForm();

  return (
    <AuthWrapper titlePage="Create new Password?">
      <form onSubmit={onSubmit}>
        <div className={styles.containerInputs}>
          <LabelInput
            labelText="Password"
            type="password"
            placeholder="Password"
            autoFocus
            register={register('password')}
            error={errors.password}
          />

          <LabelInput
            labelText="Confirm Password"
            type="password"
            placeholder="Password"
            register={register('confirmPassword')}
            error={errors.confirmPassword}
          />
        </div>

        <Button type="submit" classTypeButton="filled" disabled={isLoading}>
          Reset Password
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default ResetPasswordPage;
