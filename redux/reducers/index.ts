import { combineReducers } from 'redux';
import users from './users';
import posts from './posts';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  users,
  posts,
});

export default rootReducer;
