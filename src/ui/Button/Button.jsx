import cn from 'classnames';

import Spinner from 'components/Spinner';

import styles from './Button.module.scss';

/**
 * @param {Object} props - props for component
 * @param {string} props.type - type button: "submit" | "button"
 * @param {string} props.className - custom className for button
 * @param {string} props.classTypeButton - class type name for button: "filled" | "empty"
 * @param {boolean} props.disabled - is disabled button
 * @param {Function} props.onClick - callback function
 * @param {React.ReactNode} props.children - child elements
 */
const Button = ({
  type,
  className,
  classTypeButton,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      className={cn(styles.buttonCustom, styles[classTypeButton], className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={cn(styles.buttonContent, styles[classTypeButton])}>
        {children}
      </span>

      {disabled && (
        <span className={styles.spinnerContainer}>
          <Spinner />
        </span>
      )}
    </button>
  );
};

export default Button;
