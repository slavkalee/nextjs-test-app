import React, { ChangeEvent } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string | undefined;
  error: string | undefined;
  placeholder: string;
  touched: any;
  onChange: (e: ChangeEvent<any>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  touched,
  label,
  error,
  ...props
}) => {
  const invalidClass = touched && error ? styles.invalid : '';
  const validClass = !error && touched ? styles.valid : '';

  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input
        className={[invalidClass, validClass].join(' ')}
        {...props}
        autoComplete="off"
      />
      {error && touched ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};

export default InputField;
