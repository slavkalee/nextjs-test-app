import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/selectors/users';

export default memo(function UserInfo({ id }) {
  const user = useSelector(getUser(id));
  return (
    <div className='user-info'>
      {
        user &&
        <>
          <div className="user-info__name">{user.name}</div>
          <div className="user-info__mail">asdsad</div>
        </>
      }
      
    </div>
  )
});
