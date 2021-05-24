import React from 'react';
import styles from './Button.module.scss';

type ButtonType = 'button' | 'submit';

interface ButtonProps {
  type: ButtonType;
  icon: React.ReactElement;
  title?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, icon, title, onClick }) => {
  return (
    <div className={styles.btn__container}>
      <button className={styles.btn} type={type} onClick={onClick}>
        {icon}
        <div className={styles.btn__text}>{title}</div>
      </button>
    </div>
  );
};

export default Button;
