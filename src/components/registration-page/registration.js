console.log('fuck');
export default {
  name: 'registration',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      email: '',
      password: ''
    };
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
          fuck: 'fuck'
        })
      })
      .then((res) => {
        return res.text();
      })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
      console.log('omg');
    }
  }
};
