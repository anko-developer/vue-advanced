<template>
  <div id="app">
    <!-- Font Test -->
    <p style="font-size:9px">폰트 9px</p>
    <p style="font-size:10px">폰트 10px</p>
    <p style="font-size:9pt">폰트 9pt</p>
    <p style="font-size:10pt">폰트 10pt</p>
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import Spinner from './components/Spinner';
import bus from './utils/bus';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    statartSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.statartSpinner);
    bus.$on('end:spinner', this.endSpinner);

    console.log(process.env.VUE_APP_TITLE);
  },
  beforeDestory() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #35495e;
}

a:hover {
  text-decoration: underline;
  color: #42b883;
}

.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
