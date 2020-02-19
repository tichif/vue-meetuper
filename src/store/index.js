import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import meetups from './modules/meetups';
import categories from './modules/categories';
import threads from './modules/threads';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetups,
    categories,
    threads
  },
  // simple functions to mutate a state
  // mutations are shared between modules
  mutations: {
    setItems(state, { resource, items }) {
      state[resource].items = items;
    },
    setItem(state, { resource, item }) {
      state[resource].item = item;
    }
  }
});
