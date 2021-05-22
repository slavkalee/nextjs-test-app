import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { User } from '../../redux/reducers/users';
import { getAllUsers } from '../../redux/selectors/users';
import UserCard from './UserCard';

interface UsersProps {
  onNameClick: (id: number) => void;
}

const Users: React.FC<UsersProps> = ({ onNameClick }) => {
  const users = useSelector<RootState, User[]>(getAllUsers());

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

export default Users;
