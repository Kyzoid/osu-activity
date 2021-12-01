import { StateType } from './types';

export default {
  isLoggedIn: (state: StateType) => {
    try {
      return state.authUser?.uid !== null
    } catch {
      return false
    }
  }
}