<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import ListMixin from '../mixins/ListMixin';
// import bus from '../utils/bus';

export default {
  components: {
    ListItem,
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin],
}
</script>

<style>
</style>
