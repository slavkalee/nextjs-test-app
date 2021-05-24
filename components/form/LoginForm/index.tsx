import { useFormik } from 'formik';
import React from 'react';
import Button from '../../button';
import InputIcon from '../../icons/InputIcon';
import LoaderIcon from '../../icons/LoaderIcon';
import InputField from '../InputField';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  onSubmit: (values: InputValues) => Promise<void>;
  loading: boolean;
}

export interface InputValues {
  username?: string;
  password?: string;
}

function validate(values: InputValues) {
  const errors: InputValues = {};

  if (!values.username) {
    errors.username = 'Заполните это поле';
  }

  if (!values.password) {
    errors.password = 'Заполните это поле';
  } else if (!/^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/.test(values.password)) {
    errors.password =
      'Пароль должен быть не менее 8 символов, содержать 1 прописную букву и 1 цифру';
  }

  return errors;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const { values, errors, touched, handleSubmit, handleChange } =
    useFormik<InputValues>({
      initialValues: {
        username: 'slavkalee',
        password: 'Password123',
      },
      validate,
      onSubmit,
    });

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Авторизация</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          id="username"
          name="username"
          type="text"
          label="Логин"
          placeholder="Введите Github логин"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
          touched={touched.username}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          touched={touched.password}
        />
        <Button
          type="submit"
          icon={loading ? <LoaderIcon /> : <InputIcon />}
          title={loading ? '' : 'Войти'}
        />
      </form>
    </div>
  );
};

export default LoginForm;
