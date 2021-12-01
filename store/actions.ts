export default {
  async onAuthStateChanged({ commit }: any, { authUser }: any) {
    if (!authUser) {
      commit('RESET_STORE');
      return;
    }
    if (authUser && authUser.getIdToken) {
      try {
        await authUser.getIdToken(true);
      } catch (e) {
        console.error(e);
      }
    }
    commit('SET_AUTH_USER', { authUser });
  },
}