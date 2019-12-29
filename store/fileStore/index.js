import { genericAPICaller, FILES_URL } from "~/common/api";

export const state = () => ({
  loadedFiles: []
});

export const actions = {
  loadFile({ commit }) {
    genericAPICaller(FILES_URL).then(loadedFiles => {
      commit("addFile", loadedFiles.data);
    });
  }
};

export const mutations = {
  addFile(state, newFile) {
    state.loadedFiles = newFile;
  }
};
