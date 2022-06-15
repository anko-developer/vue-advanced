<template>
  <div>
    <button @click="loginUser1">login</button>
    <ul>
      <li v-for="item in items">{{ item  }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from './utils/handler';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    // promise 비동기처리
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          if (response.data.id === 1) {
            console.log('사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
              .then(response => {
                this.items = response;
              })
              .catch(error => console.log(error));
          }
        })
        .catch(error => console.log(error));
    },
    // 더 간편하게 async, await 사용하기
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        if (response.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
          this.items = list.data;
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>