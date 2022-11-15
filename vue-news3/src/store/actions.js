import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const response = await fetchNewsList()
      commit('SET_NEWS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // ask는 api 안에서 에러처리를 해봤음
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', reponse.data);
    return response;
  },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
    
  },
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchCommentItem(id);
      commit('SET_ITEM', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // api 안에서 에러처리를 해봤음
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
}