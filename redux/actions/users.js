import {
  USERS_RECEIVED,
} from '../actionTypes';

export const fetchUsers = payload => ({ type: USERS_RECEIVED, payload });