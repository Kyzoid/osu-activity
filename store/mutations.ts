import initialState from './state';
import { StateType } from './types';

export default {
  RESET_STORE: (state: StateType) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state: StateType, { authUser }: any) => {
    state.authUser = {
      uid: authUser.uid
    }
  },

  SET_LOADING: (state: StateType, loading: boolean) => {
    state.loading = loading;
  }
}