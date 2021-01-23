import { POSTS_RECEIVED, USER_POSTS_RECEIVED } from '../actionTypes';

const initialState = [];

function posts(state = initialState, action) {
  switch (action.type) {
    case POSTS_RECEIVED:
      return action.payload;
    case USER_POSTS_RECEIVED:
      return action.payload;
    default:
      return state;
  }
}

export default posts;
