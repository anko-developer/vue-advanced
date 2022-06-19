<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          <p>{{ response.name }}</p>
          <p>{{ response.email }}</p>
        </div>
        <div v-if="loading">
          로딩중...
        </div>
      </div>
      
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'

export default {
  components: {
    FetchData
  },
  render(createElement) {

  }
}
</script>