import { Post } from "./reducers/posts";
import { User } from "./reducers/users";

export const USERS_RECEIVED = 'USERS_RECEIVED';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const USER_POSTS_RECEIVED = 'USER_POSTS_RECEIVED';

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