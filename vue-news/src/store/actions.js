import { 
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from '../api/index';

export default {
  // promise
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => {
  //       commit('SET_USER', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
      
  // },
  // async 
  async FETCH_USER(context, name) {
    const response = await fetchUserInfo(name);
    context.commit('SET_USER', response.data);
    return response;
  },
  // promise
  // FETCH_ITEM({ commit }, id) {
  //   return fetchCommentItem(id)
  //     .then(({ data }) => {
  //       commit('SET_ITEM', data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // async 
  async FETCH_ITEM(context, id) {
    const response = await fetchCommentItem(id);
    context.commit('SET_ITEM', response.data);
    return response;
  },
  // promise
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(response => {
  //       console.log('4');
  //       commit('SET_LIST', response.data);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // async 
  async FETCH_LIST(context, pageName) {
    const response = await fetchList(pageName);
    context.commit('SET_LIST', response.data);
    return response;
  }
}