import React from 'react';
import styles from './index.module.scss';

const PhoneIcon: React.FC = () => {
  return (
    <svg
      className={styles.icon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3H7.5C8.04999 3 8.5 3.45001 8.5 4C8.5 5.25 8.70001 6.45001 9.07001 7.57001C9.17999 7.92001 9.09998 8.31 8.82001 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45001 3.45001 3 4 3ZM6.54004 5C6.60004 5.89001 6.75 6.76001 6.99005 7.59L5.79004 8.79001C5.38 7.59 5.12006 6.32001 5.03003 5H6.54004ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02Z"
        fill="black"
        fillOpacity="0.54"
      />
    </svg>
  );
};

export default PhoneIcon;
