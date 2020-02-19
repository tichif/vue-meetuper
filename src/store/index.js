import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // in state we are keeping our data we are sharing with our components
  state: {},
  // getters are like computed properties. Simple functions to get a state
  getters: {},
  // Actions are like methods in vue instance. They should mutate the state
  // Very good spot to fetch data. Action call usually should resolve into data
  actions: {},
  // simple functions to mutate a state
  mutations: {}
});