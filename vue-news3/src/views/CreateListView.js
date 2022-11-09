import ListView from './ListView.vue';
import bus from '@/utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들
    name,
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          bus.$emit('end:spinner');
        })
        .catch((error) => console.log(error));
      }, 1500);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}