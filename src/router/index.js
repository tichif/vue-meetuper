import Vue from 'vue';
import Router from 'vue-router';

import PageHome from '@/pages/PageHome';
import PageMeetupDetail from '@/pages/PageMeetupDetail';
import PageMeetupFind from '@/pages/PageMeetupFind';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      //pagehome
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      //PageMeetupDetail
      path: '/meetups/:id',
      name: 'PageMeetupDetail',
      component: PageMeetupDetail
    },
    {
      //PageMeetupFind
      path: '/find',
      name: 'PageMeetupFind',
      component: PageMeetupFind
    }
  ],
  mode: 'history'
});

export default router;
