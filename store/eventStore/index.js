import { genericAPICaller, EVENTS_URL } from "~/common/api";

export const state = () => ({
  loadedEvents: []
});

export const actions = {
  loadEvent({ commit }) {
    genericAPICaller(EVENTS_URL).then(loadedEvents => {
      commit("addEvent", loadedEvents.data);
    });
  }
};

export const mutations = {
  addEvent(state, newEvent) {
    state.loadedEvents = newEvent;
  }
};
