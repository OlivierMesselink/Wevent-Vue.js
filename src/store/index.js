import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedin: false,
    currentAccount: null,

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
    updateLogin(state, payload){
      state.currentAccount = payload
      console.log(state.currentAccount)
      state.isLoggedin = true
    }
  },
  actions: {
    updateSearchQuery(context, payload) {
      context.commit("updateSearchQuery", payload);
    },
    updateLogin(context, payload){
      context.commit('updateLogin', payload);
    }
  },
  modules: {},
  getters:{
    getLoggedinState(state){
      return state.isLoggedin
    },
    getAccountData(state){
      return state.currentAccount
    },
    getUserDatabase(state){
      return state.userDatabase
    }
  }
});
