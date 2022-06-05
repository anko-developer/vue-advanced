<template>
  <div>
    <p v-for="job in fetchedJobs">
      <a :href="job.url" target="_blank">{{ job.title }}</a>
      <small>{{job.time_ago}}  {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedJobs'])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error));
  }
};
</script>

<style></style>
