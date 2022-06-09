import { 
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from '../api/index';

export default {
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then(({ data }) => {
  //       commit('SET_NEWS', data);
  //       return data;
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
      
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data)
      })
      .catch((error) => {
        console.log(error);
      });
  }
}