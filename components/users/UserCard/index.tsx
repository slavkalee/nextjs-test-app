import React, { memo } from 'react';
import { useRouter } from 'next/router';

import styles from './UserCard.module.scss';

interface UserCardProps {
  id: number;
  name: string;
  city: string;
  onNameClick: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, city, onNameClick }) => {
  const router = useRouter();

  const handleNameClick = () => onNameClick(id);

  const linkClickHandler = () => router.push(`/posts/${id}`);

  return (
    <li className={styles.user}>
      <div className={styles.user__name} onClick={handleNameClick}>
        {name}
      </div>
      <div className={styles.user__city}>{city}</div>
      <div className={styles.user__btnContainer}>
        <button className={styles.user__btn} onClick={linkClickHandler}>
          Смотреть посты
        </button>
      </div>
    </li>
  );
};

const memoizedUserCard = memo(UserCard);

export default memoizedUserCard;
