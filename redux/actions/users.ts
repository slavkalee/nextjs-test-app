import { UsersReceivedAction, USERS_RECEIVED } from '../actionTypes';
import { User } from '../reducers/users';

export const fetchUsers = (payload: User[]): UsersReceivedAction => {
  return {
    type: USERS_RECEIVED,
    payload,
  };
};
