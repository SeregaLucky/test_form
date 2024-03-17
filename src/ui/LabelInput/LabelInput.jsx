import { useId } from 'react';

import Input from 'ui/Input';

import styles from './LabelInput.module.scss';

/**
 * @param {object} props - props for component
 * @param {string} props.type - type input: "text" | "password"
 * @param {string} props.placeholder - text for placeholder
 * @param {boolean} props.autoFocus - should I enable autofocus or not?
 * @param {string} props.labelText - text to be substituted in label
 * @param {object} props.register - object from react-hook-form
 * @param {object} props.error - object error
 */
const LabelInput = ({
  type,
  placeholder,
  autoFocus,
  labelText,
  register,
  error,
}) => {
  const uniqId = useId();

  return (
    <div>
      <label className={styles.labelText} htmlFor={uniqId}>
        {labelText}
      </label>

      <Input
        type={type}
        id={uniqId}
        placeholder={placeholder}
        autoFocus={autoFocus}
        register={register}
        error={error}
      />
    </div>
  );
};

export default LabelInput;
