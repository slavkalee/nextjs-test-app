export const getUser = id => state => state.users.find(user => +user.id === +id);
export const getAllUsers = () => state => state.users;