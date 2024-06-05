<template>
    <div>
      <!-- <h1>{{ post.title }}</h1> -->
      <!-- <p>{{ post.content }}</p> -->
      <button @click="goToHome">Go to Home</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'About',
    data() {
      return {
        post: null,
      };
    },
    async created() {
      const response = await axios.get(`http://localhost/wp/welkin-wp/wp-json/wp/v2/pages/${this.$route.params.id}`);
      this.post = response.data;
    },
    methods: {
      goToHome() {
        this.$router.push('/');
      },
    },
  };
  </script>