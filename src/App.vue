<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue';
// import Page from './components/Page.vue';


export default {
  name: 'App',
  components: {   HelloWorld, Home, Posts },
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    axios.get('http://localhost/wp/welkin-wp/wp-json/wp/v2/pages/', {
      params: {
        per_page: 10
      }
    })
   .then(response => {
      this.pages = response.data;
    })
   .catch(error => {
      console.error(error);
    });
  }
}
</script>

<template>
  <!-- <Page /> -->
  <!-- <div>
    <div v-for="post in pages" :key="post.id" class="post-card">
      <h3>{{ post.acf.hero.title }}</h3>
      <div v-html="post.content.rendered"></div>
    </div>
  </div> -->
  <Posts :posts="pages"/>
  <HelloWorld />
  <Home />
</template>

<style scoped>

</style>