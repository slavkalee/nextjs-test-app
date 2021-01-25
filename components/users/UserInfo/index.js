import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { getUser } from '../../../redux/selectors/users';
import styles from './UserInfo.module.scss';

export default memo(function UserInfo({ id, hideBtn }) {
  const router = useRouter();
  const user = useSelector(getUser(id));

  if (!user) {
    return null;
  }

  const linkClickHandler = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div className={styles.info}>
      <div className={styles.info__head}>
        <div className={styles.info__head_name}>{user.name}</div>
        <div className={styles.info__head_mail}>{user.email}</div>
      </div>

      <div className={styles.info__body}>
        <div className={styles.info__body_item}>
          <svg
            className={styles.info__body_icon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 23.3276L12.6577 22.7533C18.1887 17.9237 21 13.7068 21 10C21 4.75066 16.9029 1 12 1C7.09705 1 3 4.75066 3 10C3 13.7068 5.81131 17.9237 11.3423 22.7533L12 23.3276ZM12 20.6634C7.30661 16.4335 5 12.8492 5 10C5 5.8966 8.16411 3 12 3C15.8359 3 19 5.8966 19 10C19 12.8492 16.6934 16.4335 12 20.6634ZM12 5C14.7614 5 17 7.23858 17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5ZM9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10Z"
              fill="black"
            />
          </svg>
          <div className={styles.info__body_title}>Адрес:</div>
          <div
            className={styles.info__body_content}
          >{`${user.address.city},${user.address.street}`}</div>
        </div>
        <div className={styles.info__body_item}>
          <svg
            className={styles.info__body_icon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM20 19V9H12V11H14V13H12V15H14V17H12V19H20ZM18 11H16V13H18V11ZM16 15H18V17H16V15Z"
              fill="black"
              fillOpacity="0.54"
            />
          </svg>
          <div className={styles.info__body_title}>Компания:</div>
          <div className={styles.info__body_content}>{user.company.name}</div>
        </div>
        <div className={styles.info__body_item}>
          <svg
            className={styles.info__body_icon}
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
          <div className={styles.info__body_title}>Телефон:</div>
          <div className={styles.info__body_content}>{user.phone}</div>
        </div>
        <div className={styles.info__body_item}>
          <svg
            className={styles.info__body_icon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM3.64232 8.65452C4.5557 6.37479 6.3748 4.5557 8.65452 3.64232C8.11964 4.67487 7.70006 5.96224 7.41726 7.41726C5.96224 7.70006 4.67487 8.11964 3.64232 8.65452ZM15.3455 3.64232C15.8804 4.67487 16.2999 5.96224 16.5827 7.41726C18.0378 7.70006 19.3251 8.11964 20.3577 8.65452C19.4443 6.37479 17.6252 4.5557 15.3455 3.64232ZM3 12C3 11.1008 4.62868 10.125 7.11448 9.53819C7.03905 10.3308 7 11.155 7 12C7 12.845 7.03905 13.6692 7.11448 14.4618C4.62868 13.875 3 12.8992 3 12ZM17 12C17 12.845 16.961 13.6692 16.8855 14.4618C19.3713 13.875 21 12.8992 21 12C21 11.1008 19.3713 10.125 16.8855 9.53819C16.961 10.3308 17 11.155 17 12ZM3.64232 15.3455C4.67487 15.8804 5.96224 16.2999 7.41726 16.5827C7.70006 18.0378 8.11964 19.3251 8.65452 20.3577C6.37479 19.4443 4.5557 17.6252 3.64232 15.3455ZM16.5827 16.5827C16.2999 18.0378 15.8804 19.3251 15.3455 20.3577C17.6252 19.4443 19.4443 17.6252 20.3577 15.3455C19.3251 15.8804 18.0378 16.2999 16.5827 16.5827ZM9 12C9 11.0097 9.06211 10.0597 9.17262 9.17262C10.0597 9.06211 11.0097 9 12 9C12.9903 9 13.9403 9.06211 14.8274 9.17262C14.9379 10.0597 15 11.0097 15 12C15 12.9903 14.9379 13.9403 14.8274 14.8274C13.9403 14.9379 12.9903 15 12 15C11.0097 15 10.0597 14.9379 9.17262 14.8274C9.06211 13.9403 9 12.9903 9 12ZM9.53819 16.8855C10.125 19.3713 11.1008 21 12 21C12.8992 21 13.875 19.3713 14.4618 16.8855C13.6692 16.961 12.845 17 12 17C11.155 17 10.3308 16.961 9.53819 16.8855ZM12 3C11.1008 3 10.125 4.62868 9.53819 7.11448C10.3308 7.03905 11.155 7 12 7C12.845 7 13.6692 7.03905 14.4618 7.11448C13.875 4.62868 12.8992 3 12 3Z"
              fill="black"
            />
          </svg>
          <div className={styles.info__body_title}>Сайт:</div>
          <div className={styles.info__body_content}>{user.website}</div>
        </div>
      </div>

      {hideBtn ? (
        ''
      ) : (
        <div className={styles.info__btnContainer}>
          <button className={styles.info__btn} onClick={linkClickHandler}>
            <svg
              className={styles.info__btn_icon}
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
            <div className={styles.info__btn_text}>Смотреть посты</div>
          </button>
        </div>
      )}
    </div>
  );
});
