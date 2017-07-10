/* eslint no-param-reassign: ["error", { "props": false }] */
const prefix = 'Profile_';

export default {
  // namespaced: true,
  state: {
    email: ''
  },
  mutations: {
    [`${prefix}getProfile`](state, payload) {
      state.email = payload;
    }
  },
  actions: {
    [`${prefix}getProfile`]({ commit, getters }) {
      const url = `${getters.Main_getBackendBaseUrl}profile`;
      return fetch(url, {
        headers: {
          Authorization: `Bearer ${getters.Auth_getToken}`
          // 'Content-Type': 'application/x-www-form-urlencoded'
        }
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
      .then((data) => { commit(`${prefix}getProfile`, data); });
    }
  }
};

/*
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
*/
