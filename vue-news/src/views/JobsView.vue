<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import bus from '../utils/bus';
import ListMixin from '../components/ListItem';

export default {
  components: {
    ListItem
  },
  mixins: []
};
</script>

<style scoped></style>