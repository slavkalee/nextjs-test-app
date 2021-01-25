import React, { memo } from 'react';

import styles from './AsideRight.module.scss';

export default memo(function AsideRight({ children }) {
  return <div className={styles.userInfo}>{children}</div>;
});
