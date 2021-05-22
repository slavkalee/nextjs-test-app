import { RootState } from '../reducers';
import { User } from '../reducers/users';

export const getUser =
  (id: any) =>
  (state: RootState): User | any =>
    state.users.find((user) => +user.id === +id);

export const getAllUsers = () => (state: RootState) => state.users;
