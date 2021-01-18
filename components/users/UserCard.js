import React, { memo } from 'react';
import Router from 'next/router'

export default memo(function UserCard({ id, name, city, onNameClick }) {
  const handleNameClick = () => {
    onNameClick(id);
  };

  const linkClickHandler = () => {
    Router.push(`/posts`)
  }

  return (
    <li className="users__list_card user">
      <div className="user__name" onClick={handleNameClick}>
        {name}
      </div>
      <div className="user__city">{city}</div>
      <div className="user__btn--container">
        <button className="user__btn" onClick={linkClickHandler}>Смотреть посты</button>
      </div>
    </li>
  );
});
