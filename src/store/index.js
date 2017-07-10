/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './authentication/auth';
import Profile from './profile/profile';

const prefix = 'Main_';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    Auth,
    Profile
  },
  state: {
    dummy: 0
  },
  getters: {
    [`${prefix}getBackendBaseUrl`]() {
      return 'http://localhost:8081/';
    },
    queryCurrentSearchUrl(state, getters) {
      return state + getters;
    }
  },
  mutations: {
    MAIN_initData(state, payload) {
      state.dummy = payload;
    }
  },
  actions: {
    MAIN_initData({ commit, state, getters }, data) {
      commit('MAIN_initData', data);
    }
  }
});
