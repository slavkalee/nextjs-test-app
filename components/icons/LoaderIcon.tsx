import React from 'react';
import styles from './index.module.scss'

const LoaderIcon: React.FC = () => {
  return (
    <div>
      <div className={styles.ring}></div>
    </div>
  )
}

export default LoaderIcon
