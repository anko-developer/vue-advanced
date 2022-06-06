<template>
  <div>
    <p>name : {{ fetchedUsers.id }}</p>
    <p>karma : {{ fetchedUsers.karma }}</p>
    <p>created : {{ fetchedUsers.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedUsers'])
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>