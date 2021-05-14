import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedin: false,
    searchQuery: {
      location: "",
      groupSize: null,
      budget: null,
      date: null,
      time: null,
    },
    locations: [
      { id: 1, name: "Nijmegen - Centrum" },
      { id: 2, name: "Nijmegen - Oost" },
      { id: 3, name: "Arnhem - Centrum" },
      { id: 4, name: "Arnhem - spijkerkwartier" },
    ],
  },
  mutations: {
    updateSearchQuery(state, payload) {
      state.searchQuery.location = payload.location;
      state.searchQuery.groupSize = payload.amount;
      state.searchQuery.budget = payload.budget;
      state.searchQuery.date = payload.date;
      state.searchQuery.time = payload.time;
    },
  },
  actions: {
    updateSearchQuery(context, payload) {
      context.commit("updateSearchQuery", payload);
    },
  },
  modules: {},
});
