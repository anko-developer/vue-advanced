<template>
  <div>
    <!-- <div v-for="item in fetchedNews">
      {{ user.title }}
    </div> -->
    <p v-for="item in fetchedNews">
      <a v-bind:href="item.url" target="_blank">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedNews'])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
};
</script>

<style></style>
