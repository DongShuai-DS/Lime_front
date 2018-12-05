import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tip',
      name: 'tip',
      component: () => import('./views/tip/index.vue'),
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('./views/photo/index.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/message/index.vue'),
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/my/index.vue'),
    },
  ],
});
