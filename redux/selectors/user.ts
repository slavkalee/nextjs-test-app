import { RootState } from '../reducers';

export const getCurrentUser = () => (state: RootState) => state.user;
export const getLoading = () => (state: RootState) => state.user.loading;
