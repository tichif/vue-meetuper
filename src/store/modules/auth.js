import axios from 'axios';

export default {
  namespaced: true,
  state: {},
  getters: {},
  actions: {
    loginWithEmailAndPassword(context, userData) {
      console.log(userData);
    },
    registerUser(context, userData) {
      return axios.post('/api/v1/users/register', userData);
    }
  },
  mutations: {}
};
