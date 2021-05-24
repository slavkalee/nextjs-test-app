import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { getUser } from '../../../redux/selectors/users';
import { User } from '../../../redux/reducers/users';
import { RootState } from '../../../redux/reducers';
import AddressIcon from '../../icons/AddressIcon';
import CompanyIcon from '../../icons/CompanyIcon';
import PhoneIcon from '../../icons/PhoneIcon';
import SiteIcon from '../../icons/SiteIcon';
import WatchPostsIcon from '../../icons/WatchPostsIcon';
import UserInfoRow from '../UserInfoRow/index';
import styles from './UserInfo.module.scss';
import Button from '../../button';

interface UserInfoProps {
  id: any;
  hideBtn?: boolean;
}

const UserInfo: React.FC<UserInfoProps> = ({ id, hideBtn }) => {
  const router = useRouter();
  const user = useSelector<RootState, User | any>(getUser(id));

  if (!user) {
    return null;
  }

  const linkClickHandler = () => router.push(`/posts/${id}`);

  return (
    <div className={styles.info}>
      <div className={styles.info__head}>
        <div className={styles.info__head_name}>{user.name}</div>
        <div className={styles.info__head_mail}>{user.email}</div>
      </div>

      <div className={styles.info__body}>
        <UserInfoRow
          icon={<AddressIcon />}
          title={'Адрес'}
          body={`${user.address.city},${user.address.street}`}
        />

        <UserInfoRow
          icon={<CompanyIcon />}
          title={'Компания'}
          body={user.company.name}
        />
        <UserInfoRow icon={<PhoneIcon />} title={'Телефон'} body={user.phone} />
        <UserInfoRow icon={<SiteIcon />} title={'Сайт'} body={user.website} />
      </div>

      {hideBtn ? null : (
        <div className={styles.box}>
          <Button
            type="button"
            icon={<WatchPostsIcon />}
            title="Смотреть посты"
            onClick={linkClickHandler}
          />
        </div>
      )}
    </div>
  );
};

const memoizedUserInfo = memo(UserInfo);

export default memoizedUserInfo;
