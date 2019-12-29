import { genericAPICaller, USER_INFO_URL } from "~/common/api";

export const state = () => ({
  loadedUsers: []
});

export const actions = {
  loadUser({ commit }) {
    genericAPICaller(USER_INFO_URL).then(loadedUsers => {
      commit("addUser", loadedUsers.data);
    });
  }
};

export const mutations = {
  addUser(state, newUser) {
    state.loadedUsers = newUser;
  }
};
