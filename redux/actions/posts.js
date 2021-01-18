import {
  POSTS_RECEIVED,
} from '../actionTypes';

export const fetchPosts = payload => ({ type: POSTS_RECEIVED, payload });