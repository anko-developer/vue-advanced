import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedJobs(state) {
      return state.jobs;
    }
  },
  mutations,
  actions
});