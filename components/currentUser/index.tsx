import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers';
import { getCurrentUser } from '../../redux/selectors/user';

import styles from './CurrentUser.module.scss'

const CurrentUser: React.FC = () => {
  const currentUser = useSelector<RootState, any>(getCurrentUser());

  return (
    <div className={styles.user}>
      <div className={styles.user__avatar}>
        <img src={currentUser.avatar_url} alt="avatar" />
      </div>
      <div className={styles.user__login}>
        {currentUser.login}
      </div>
    </div>
  )
}

export default CurrentUser
