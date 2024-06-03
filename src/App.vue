<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Page from './components/Page.vue';

export default {
  name: 'App',
  components: {  Home, Page },

  };
</script>

<template>
  <Page />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <Home />
</template>

<style scoped>

</style>
