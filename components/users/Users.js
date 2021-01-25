import React from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/selectors/users';
import UserCard from './UserCard';

export default function Users({ onNameClick }) {
  const users = useSelector(getAllUsers());

  return (
      <ul className="users">
        {users.map(user => (
          <UserCard
            key={`user_card_${user.id}`}
            id={user.id}
            name={user.name}
            city={user.address.city}
            onNameClick={onNameClick}
          />
        ))}
      </ul>
  );
}
