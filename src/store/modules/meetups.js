import axios from 'axios';

export default {
  namespaced: true,
  state: {
    // all meetups
    items: [],
    // single meetup
    item: {}
  },
  getters: {},
  actions: {
    // fetch meetups
    fetchMeetups({ state, commit }) {
      commit('setItems', { resource: 'meetups', items: [] }, { root: true });
      axios.get('/api/v1/meetups').then(res => {
        const meetups = res.data;
        commit(
          'setItems',
          { resource: 'meetups', items: meetups },
          { root: true }
        );
        return state.meetups;
      });
    },
    // fetch meetup by id
    fetchMeetupById({ state, commit }, meetupId) {
      commit('setItem', { resource: 'meetups', item: {} }, { root: true });
      axios.get('/api/v1/meetups/' + meetupId).then(res => {
        const meetup = res.data;
        commit(
          'setItem',
          { resource: 'meetups', item: meetup },
          { root: true }
        );
        return state.meetup;
      });
    }
  },
  mutations: {}
};
