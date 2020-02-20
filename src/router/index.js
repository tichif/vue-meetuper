import Vue from 'vue';
import Router from 'vue-router';

import PageHome from '@/pages/PageHome';
import PageMeetupDetail from '@/pages/PageMeetupDetail';
import PageMeetupFind from '@/pages/PageMeetupFind';
import PageLogin from '@/pages/PageLogin';
import PageRegister from '@/pages/PageRegister';
import PageNotFound from '@/pages/PageNotFound';

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
    },
    {
      //PageLogin
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      //PageRegister
      path: '/register',
      name: 'PageRegister',
      component: PageRegister
    },
    {
      //PageNotFound
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
});

export default router;
