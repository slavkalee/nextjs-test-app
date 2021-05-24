import { combineReducers } from 'redux';
import users from './users';
import posts from './posts';
import user from './user'

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user,
  users,
  posts,
});

export default rootReducer;
