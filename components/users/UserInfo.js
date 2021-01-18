import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/selectors/users';

export default memo(function UserInfo({ id }) {
  const user = useSelector(getUser(id));

  if (!user) {
    return null;
  }

  return (
    <>
      <div className="user-info__name">{user.name}</div>
      <div className="user-info__mail">{user.email}</div>
      <hr />
      <div className="user-info__address">{`City: ${user.address.city}`}</div>
      <div className="user-info__phone">{user.phone}</div>
      <div className="user-info__company">{user.company.name}</div>
      <div className="user-info__site">{user.website}</div>
    </>
  );
});
