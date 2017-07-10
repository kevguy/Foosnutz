/* eslint no-param-reassign: ["error", { "props": false }] */
const prefix = 'Auth_';

export default {
  // namespaced: true,
  state: {
    token: ''
  },
  getters: { },
  mutations: {
    [`${prefix}initToken`]: (state) => {
      state.token = '';
    },
    [`${prefix}updateToken`](state, payload) {
      state.token = payload;
    }
  },
  actions: {
    [`${prefix}updateToken`]({ commit, state, getters }, data) {
      commit(`${prefix}updateToken`, data);
    }
  }
};
