import { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as EyeIcon } from 'assets/icons/eye-icon.svg';

import styles from './Input.module.scss';

/**
 * @param {Object} props - props for component
 * @param {string} [props.type='text'] - type input: "text" | "password"
 * @param {string} [props.id=undefined] - uniq id
 * @param {string} props.placeholder - text for placeholder
 * @param {boolean} [props.autoFocus=false] - should I enable autofocus or not?
 * @param {object} props.register - object from react-hook-form
 * @param {object} props.error - object error
 */
const Input = ({
  type = 'text',
  id,
  placeholder,
  autoFocus = false,
  register,
  error,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const isPasswordInput = type === 'password';

  return (
    <div className={styles.container}>
      <input
        className={cn(styles.inputAuth, { [styles.password]: isPasswordInput })}
        type={isPasswordInput && isShowPassword ? 'text' : type}
        id={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...register}
      />

      {isPasswordInput && (
        <button
          className={cn(styles.buttonShowPass, {
            [styles.closeEye]: isShowPassword,
          })}
          type="button"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          <EyeIcon />
        </button>
      )}

      {error?.message && (
        <span className={styles.errorMessage}>{error.message}</span>
      )}
    </div>
  );
};

export default Input;
