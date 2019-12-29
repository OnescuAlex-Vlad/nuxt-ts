import { genericAPICaller, TAXES_URL } from "~/common/api";

export const state = () => ({
  loadedTaxes: []
});

export const actions = {
  loadTaxes({ commit }) {
    genericAPICaller(TAXES_URL).then(loadedTaxes => {
      commit("addTaxe", loadedTaxes.data);
    });
  }
};

export const mutations = {
  addTaxe(state, newTaxe) {
    state.loadedTaxes = newTaxe;
  }
};
