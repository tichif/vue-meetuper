import Vue from 'vue';
import Router from 'vue-router';

import PageHome from '@/pages/PageHome';
import PageMeetupDetail from '@/pages/PageMeetupDetail';

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
    }
  ],
  mode: 'history'
});

export default router;
