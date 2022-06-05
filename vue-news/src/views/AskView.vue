<template>
  <div>
    <p v-for="item in fetchedAsk">
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
