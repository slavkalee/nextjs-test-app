import { Post } from './reducers/posts';
import { User } from './reducers/users';

export const USERS_RECEIVED = 'USERS_RECEIVED';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const RESET_USERS = 'RESET_USERS';
export const RESET_POSTS = 'RESET_POSTS';
export const USER_POSTS_RECEIVED = 'USER_POSTS_RECEIVED';
export const SET_USER = 'SET_USER';
export const RESET_LOADING = 'RESET_LOADING';
export const RESET_USER = 'RESET_USER';

export interface UsersReceivedAction {
  type: typeof USERS_RECEIVED;
  payload: User[];
}

export interface PostsReceivedAction {
  type: typeof POSTS_RECEIVED;
  payload: Post[];
}

export interface UserPostsReceivedAction {
  type: typeof USER_POSTS_RECEIVED;
  payload: Post[];
}

export interface SetUserAction {
  type: typeof SET_USER;
  payload: any;
}
