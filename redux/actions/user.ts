import { RESET_LOADING, RESET_USER, SetUserAction, SET_USER } from '../actionTypes';

export function setUser(user: any): SetUserAction {
  return {
    type: SET_USER,
    payload: { user },
  };
}

export function resetLoading() {
  return {
    type: RESET_LOADING,
  };
}

export function resetUser() {
  return {
    type: RESET_USER,
  };
}
