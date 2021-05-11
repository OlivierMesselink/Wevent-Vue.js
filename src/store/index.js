import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedin: false,
    searchQuery: {location: '', groupSize: null, budget: null, date: null, time: null}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
