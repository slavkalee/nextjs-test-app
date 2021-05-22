import React from 'react';

import styles from './UserInfoRow.module.scss';

interface UserInfoRowProps {
  icon: React.ReactElement;
  title: string;
  body: string;
}

const UserInfoRow: React.FC<UserInfoRowProps> = ({ icon, title, body }) => {  
  return (
    <div className={styles.row}>
      <div>{icon}</div>
      <div className={styles.row__title}>{title}:</div>
      <div className={styles.row__body}>{body}</div>
    </div>
  );
};

export default UserInfoRow;
