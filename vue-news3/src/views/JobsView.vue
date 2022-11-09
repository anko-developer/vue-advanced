<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import bus from '../utils/bus.js';
import ListMixin from '@/mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_JOBS')
  //     .then(() => {
  //       console.log('test1');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((error) => console.log(error));
  //   }, 3000);
  }
}
</script>