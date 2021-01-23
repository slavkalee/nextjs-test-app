import { POSTS_RECEIVED, USER_POSTS_RECEIVED } from '../actionTypes';

export const fetchPosts = (payload) => ({ type: POSTS_RECEIVED, payload });

export const fetchUserPosts = (payload) => ({
  type: USER_POSTS_RECEIVED,
  payload,
});
