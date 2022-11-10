import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';
import bus from '@/utils/bus';
import { store } from '@/store/index';
// import createListView from '@/views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        setTimeout(() => {
          store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => console.log(error));
        }, 1500);
      }
      // component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        setTimeout(() => {
          store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => console.log(error));
        }, 1500);
      }
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from ,next) => {
        bus.$emit('start:spinner');
        setTimeout(() => {
          store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => console.log(error));
        }, 1500);
      }
      // component: createListView('JobsView'),
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    }
  ]
});