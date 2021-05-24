import { RESET_USERS, UsersReceivedAction, USERS_RECEIVED } from '../actionTypes';
import { User } from '../reducers/users';

export function fetchUsers(payload: User[]): UsersReceivedAction {
  return {
    type: USERS_RECEIVED,
    payload,
  };
};

export function resetUsers() {
  return {
    type: RESET_USERS
  }
} 
