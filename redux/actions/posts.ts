import { PostsReceivedAction, POSTS_RECEIVED, RESET_POSTS, UserPostsReceivedAction, USER_POSTS_RECEIVED } from '../actionTypes';
import { Post } from '../reducers/posts';

export function fetchPosts(payload: Post[]): PostsReceivedAction {
  return {
    type: POSTS_RECEIVED,
    payload,
  };
};

export function fetchUserPosts(payload: Post[]): UserPostsReceivedAction {
  return {
    type: USER_POSTS_RECEIVED,
    payload,
  };
};

export function resetPosts() {
  return {
    type: RESET_POSTS,
  }
}
