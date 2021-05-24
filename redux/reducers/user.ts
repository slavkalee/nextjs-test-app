import { RESET_LOADING, RESET_USER, SET_USER } from '../actionTypes';

export interface IndexState {
  isAuth: boolean;
  loading: boolean;
}

const initialState = {
  isAuth: false,
  loading: false,
};

function user(state: IndexState = initialState, action: any) {
  switch (action.type) {
    case SET_USER:
      return {
        isAuth: true,
        loading: true,
        ...action.payload.user
      };
    case RESET_USER:
      return initialState;
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}

export default user;
