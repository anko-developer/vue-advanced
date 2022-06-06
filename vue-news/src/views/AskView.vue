<template>
  <div>
    <p v-for="item in fetchedAsk">
      <router-link v-bind:to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // #4
    ...mapGetters(['fetchedAsk'])

    // #3
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // })

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
};
</script>

<style></style>
