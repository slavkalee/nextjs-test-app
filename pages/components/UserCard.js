import React, { memo } from 'react'

export default memo(function UserCard({ id, name, city, onNameClick }) {
  const handleNameClick = () => {
    onNameClick(id);
  };

  return (
    <li className='users__list_card user'>
      <div className="user__name" onClick={handleNameClick}>{name}</div>
      <div className="user__city">{city}</div>
      <div className="user__btn--container">
        <button className="user__btn">Смотреть посты</button>
      </div>
    </li>
  )
});
