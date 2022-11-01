<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //   .then(response => this.users = response.data)
    //   .catch(error => console.log(error))
  }
}
</script>

<style>

</style>