<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="title">
            <template v-if="item.domain">
              <a v-bind:href="item.url" target="_blank">
                {{ item.title }} 
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }} 
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            
              <router-link
                v-if="item.user"
                v-bind:to="`user/${item.user}`" class="link-text">{{ item.user }}</router-link>
              <a :href="item.url" v-else>
                {{ item.domain }}
              </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    let actionName = '';
    if (name === 'news') {
      actionName = 'FETCH_NEWS';
    } else if( name === 'ask') {
      actionName = 'FETCH_ASK';
    } else if( name === 'jobs') {
      actionName = 'FETCH_JOBS';
    }

    this.$store.dispatch(actionName);
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if( name === 'ask') {
        return this.$store.state.ask;
      } else if( name === 'jobs') {
        return this.$store.state.jobs;
      }
    }
  },
};
</script>

<style scoped>
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