import React, { memo } from 'react';

import styles from './AsideRight.module.scss';

interface AsideRightProps {
  children: React.ReactNode;
}

const AsideRight: React.FC<AsideRightProps> = ({ children }) => {
  return <div className={styles.userInfo}>{children}</div>;
};

const MemoizedAsideRight = memo(AsideRight);

export default MemoizedAsideRight;
