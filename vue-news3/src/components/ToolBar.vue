<template>
  <div class="header">
    <router-link to="/news">News </router-link>|
    <router-link to="/ask">Ask</router-link>|
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  display: flex;
  padding: 8px;
  color: #fff;
  background-color: #42b883;
}

.header > a {
  color: #fff;
}

.header .router-link-exact-active {
  color: #35495e;
}
</style>