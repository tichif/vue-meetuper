import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    authUser(state) {
      return state.user || null;
    },
    isAuthenticated(state) {
      return !!state.user;
    }
  },
  actions: {
    loginWithEmailAndPassword({ commit }, userData) {
      return axios.post('/api/v1/users/login', userData).then(res => {
        const user = res.data;
        commit('setAuthUser', user);
      });
    },
    registerUser(userData) {
      return axios.post('/api/v1/users/register', userData);
    },
    getAuthUser({ commit }) {
      return axios
        .get('/api/v1/users/me')
        .then(res => {
          const user = res.data;
          commit('setAuthUser', user);
          return user;
        })
        .catch(err => {
          commit('setAuthUser', null);
          return err;
        });
    },
    logout({ commit }) {
      return axios
        .post('/api/v1/users/logout')
        .then(() => {
          commit('setAuthUser', null);
          return true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    setAuthUser(state, user) {
      return (state.user = user);
    }
  }
};
