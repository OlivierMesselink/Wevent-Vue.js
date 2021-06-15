import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedin: false,
    currentAccount: null,

    searchQuery: {
      location: "",
      amount: null,
      budget: null,
      date: null,
      time: null,
    },
    locations: [
      { id: 1, name: "Nijmegen" },
      { id: 2, name: "Arnhem" },
      {id: 3, name: "Amersfoort"},
    ],
  },
  mutations: {
    updateSearchQuery(state, payload) {
      state.searchQuery.location = payload.location;
      state.searchQuery.amount = payload.amount;
      state.searchQuery.budget = payload.budget;
      state.searchQuery.date = payload.date;
      state.searchQuery.time = payload.time;
    },
    updateLogin(state, payload){
      state.currentAccount = payload
      state.isLoggedin = true
    }
  },
  actions: {
    updateSearchQuery(context, payload) {
      context.commit("updateSearchQuery", payload);
      console.log("payload:")
      console.log(payload)
      console.log("state:")
      console.log(this.state.searchQuery)
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
    getSearchQuery(state){
      return state.searchQuery
    }
  }
});
