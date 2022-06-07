<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';

export default {
  components: {
    ToolBar
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
