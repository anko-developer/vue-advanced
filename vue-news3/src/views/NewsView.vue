<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">{{ user.id }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
      .then(response => this.users = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>