import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    email: null,
    token: null,
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    getToken(state) {
      return state.token;
    },
    getEmail(state) {
      return state.email;
    }
}});