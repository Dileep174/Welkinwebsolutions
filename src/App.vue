<template>
  <div id="app">
    
    <!-- <Posts /> -->
    <!-- <Page /> -->
    <Header >
    </Header>

    <footer-component></footer-component>
  </div>
  
</template>

<script>
import Header from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
// import Page from './components/Page.vue';
// import Posts from './components/Posts.vue';
export default {
  components: {
    // Page,
    // Posts,
    Header,
    
    FooterComponent,
  },
};
</script>