import { POSTS_RECEIVED, RESET_POSTS, USER_POSTS_RECEIVED } from '../actionTypes';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

function posts(state: Post[] = [], action: any): Post[] {
  switch (action.type) {
    case POSTS_RECEIVED:
      return action.payload;
    case USER_POSTS_RECEIVED:
      return action.payload;
    case RESET_POSTS:
      return [];
    default:
      return state;
  }
}

export default posts;
