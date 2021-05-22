import { PostsReceivedAction, POSTS_RECEIVED, UserPostsReceivedAction, USER_POSTS_RECEIVED } from '../actionTypes';
import { Post } from '../reducers/posts';

export const fetchPosts = (payload: Post[]): PostsReceivedAction => {
  return {
    type: POSTS_RECEIVED,
    payload,
  };
};

export const fetchUserPosts = (payload: Post[]): UserPostsReceivedAction => {
  return {
    type: USER_POSTS_RECEIVED,
    payload,
  };
};
