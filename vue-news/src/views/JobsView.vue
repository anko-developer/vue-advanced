<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
라import ListItem from '../components/ListItem';
import ListMixin from '../components/ListItem';
// import bus from '../utils/bus';

export default {
  components: {
    ListItem
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin]
};
</script>

<style scoped></style>