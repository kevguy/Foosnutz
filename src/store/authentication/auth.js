/* eslint no-param-reassign: ["error", { "props": false }] */
const prefix = 'Auth_';
const localStorage = window.localStorage;

export default {
  // namespaced: true,
  state: {
    token: ''
  },
  getters: {
    [`${prefix}getToken`](state) {
      if (!state.token) {
        state.token = localStorage.getItem('userToken');
      }
      return state.token;
    },
    [`${prefix}isAuthenticated`](state, getters) {
      return !!getters[`${prefix}getToken`];
    }
  },
  mutations: {
    [`${prefix}initToken`](state) {
      localStorage.setItem('userToken', null);
      state.token = '';
    },
    [`${prefix}updateToken`](state, payload) {
      localStorage.setItem('userToken', payload);
      state.token = payload;
    }
  },
  actions: {
    [`${prefix}updateToken`]({ commit, state, getters }, data) {
      commit(`${prefix}updateToken`, data);
    }
  }
};
