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
    [`${prefix}removeToken`](state) {
      localStorage.removeItem('userToken');
      state.token = null;
    },
    [`${prefix}updateToken`](state, payload) {
      localStorage.setItem('userToken', payload);
      state.token = payload;
    }
  },
  actions: {
    [`${prefix}register`]({ commit, state, getters }, dataToBeSent) {
      const url = `${getters.Main_getBackendBaseUrl}register`;
      return fetch(url, {
        mode: 'cors-with-forced-preflight',
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          email: dataToBeSent.email,
          password: dataToBeSent.password
        })
      })
      .then((res) => {
        console.log('got it');
        return res.text();
      })
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        return JSON.parse(data);
      })
      .catch((error) => {
        console.log('Request failed', error);
      })
      .then((data) => { commit(`${prefix}updateToken`, data.token); });
    },
    [`${prefix}updateToken`]({ commit, state, getters }, data) {
      commit(`${prefix}updateToken`, data);
    },
    [`${prefix}signOut`]({ commit }) {
      commit(`${prefix}removeToken`);
    }
  }
};
