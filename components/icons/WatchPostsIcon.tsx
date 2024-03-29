import React from 'react';
import styles from './index.module.scss';

const WatchPostsIcon: React.FC = () => {
  return (
    <svg
      className={styles.btn_icon}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.96208 12.9228C5.85174 12.8968 5.73629 12.9026 5.62911 12.9395L3.63006 13.628L3.62994 13.6281L1.6012 14.3264L2.10347 12.2402L2.10363 12.2395L2.31319 11.3647C2.36017 11.1686 2.30548 10.962 2.16763 10.8148C1.22619 9.80954 0.68313 8.57459 0.68313 7.25318C0.68313 4.09714 3.84452 1.35006 7.99997 1.35006C12.1554 1.35006 15.3168 4.09714 15.3168 7.25318C15.3168 10.4092 12.1554 13.1563 7.99997 13.1563C7.2908 13.1563 6.6085 13.0751 5.96208 12.9228ZM1.42874 14.3857C1.42878 14.3857 1.42882 14.3857 1.42886 14.3857L1.42874 14.3857Z"
        stroke="white"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.04614 5.94377H10.7676"
        stroke="white"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.04614 8.79996H10.7676"
        stroke="white"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WatchPostsIcon;
