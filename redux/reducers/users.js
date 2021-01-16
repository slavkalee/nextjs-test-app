import { USERS_RECEIVED } from '../actionTypes';

const initialState = [];

function users(state = initialState, action) {
  switch (action.type) {
    case USERS_RECEIVED:
      return action.payload;
    default:
      return state;
  }
};

export default users;
