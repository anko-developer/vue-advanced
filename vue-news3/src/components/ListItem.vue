<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0}}
        </div>

        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <span class="link-text">
            by 
            <router-link 
              v-if="item.user"
              v-bind:to="`/user/${item.user}`" 
              class="link-text">{{ item.user }}</router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    // ...mapGetters([
    //   'fetchedNews'
    // ]),
    listItems() {
      const name = this.$route.name;

      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'jobs') {
        return this.$store.state.jobs;
      } else if (name === 'ask') {
        return this.$store.state.ask;
      }
    }
  },
  created() {
    const name = this.$route.name;
    let actionName = '';

    if (name === 'news') {
      // this.$store.dispatch('FETCH_NEWS');
      actionName = 'FETCH_NEWS';
    } else if (name === 'jobs') {
      // this.$store.dispatch('FETCH_JOBS');
      actionName = 'FETCH_JOBS';
    } else if (name === 'ask') {
      // this.$store.dispatch('FETCH_ASK');
      actionName = 'FETCH_ASK';
    }

    this.$store.dispatch(actionName);
  }
}
</script>

<style lang="scss">
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