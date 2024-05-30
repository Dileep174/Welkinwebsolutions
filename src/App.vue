<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: { Home, HelloWorld },

  };
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Home />
</template>

<style scoped>

</style>
