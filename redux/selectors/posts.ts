import { RootState } from '../reducers';

export const getAllPosts = () => (state: RootState) => state.posts;
export const getUserAllPosts = () => (state: RootState) => state.posts;
