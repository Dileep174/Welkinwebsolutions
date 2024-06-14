<template>
  <div>
    <Header></Header>
  </div>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  }
};
</script>
