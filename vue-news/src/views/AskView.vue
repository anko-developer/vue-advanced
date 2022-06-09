<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import ListMixin from '../mixins/ListMixin';

// import { mapGetters } from 'vuex';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
};
</script>

<style scpoed>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  list-style: none;
}

.points {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}

.title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
