<template>
  <div>
    <p v-for="item in fetchedJobs" v-bind:key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <span>{{ item.domain }}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>