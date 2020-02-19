import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // in state we are keeping our data we are sharing with our components
  state: {
    meetups: [],
    categories: [],
    threads: [],
    meetup: {}
  },
  // getters are like computed properties. Simple functions to get a state
  getters: {},
  // Actions are like methods in vue instance. They should mutate the state
  // Very good spot to fetch data. Action call usually should resolve into data
  actions: {
    // fetch meetups
    fetchMeetups({ state, commit }) {
      commit('setItems', { resource: 'meetups', items: [] });
      axios.get('/api/v1/meetups').then(res => {
        const meetups = res.data;
        commit('setItems', { resource: 'meetups', items: meetups });
        return state.meetups;
      });
    },
    // fetch categories
    fetchCategories({ state, commit }) {
      axios.get('/api/v1/categories').then(res => {
        const categories = res.data;
        commit('setItems', { resource: 'categories', items: categories });
        return state.categories;
      });
    },
    // fetch meetup by id
    fetchMeetupById({ state, commit }, meetupId) {
      commit('setItem', { resource: 'meetup', item: {} });
      axios.get('/api/v1/meetups/' + meetupId).then(res => {
        const meetup = res.data;
        commit('setItem', { resource: 'meetup', item: meetup });
        return state.meetup;
      });
    },
    // fetch threads
    fetchThreads({ state, commit }, meetupId) {
      commit('setItems', { resource: 'threads', items: [] });
      axios.get(`/api/v1/threads?meetupId=${meetupId}`).then(res => {
        const threads = res.data;
        commit('setItems', { resource: 'threads', items: threads });
        return state.threads;
      });
    }
  },
  // simple functions to mutate a state
  mutations: {
    setItems(state, { resource, items }) {
      state[resource] = items;
    },
    setItem(state, { resource, item }) {
      state[resource] = item;
    }
  }
});
