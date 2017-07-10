import { mapGetters } from 'vuex';

export default {
  name: 'registration',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters({
      getToken: 'MAIN_getToken'
    })
  },
  methods: {
    submit() {
      let url = 'http://localhost:8081/register';
      fetch(url, {
        mode: 'cors-with-forced-preflight',
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body:  JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
      .then((res) => {
        return res.text();
      })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        return JSON.parse(data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      })
      .then((data) => this.$store.dispatch('Auth_updateToken', data.token));
      console.log('omg');
    }
  }
};
