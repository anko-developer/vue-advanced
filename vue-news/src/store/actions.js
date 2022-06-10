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
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
      
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(response => {
        console.log('4');
        commit('SET_LIST', response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}