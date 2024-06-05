<template>
  <div id="app">
    <header-component></header-component>
    <!-- <router-view></router-view> -->
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import AboutComponent from './views/About.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>