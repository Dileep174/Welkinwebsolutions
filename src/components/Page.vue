<template>
    <div v-if="page">
      <h1>{{ page.title.rendered }}</h1>
      <div v-html="page.content.rendered"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'Page',
    setup() {
      const route = useRoute();
      const page = ref(null);
  
      onMounted(() => {
        const fetchPage = async () => {
          const res = await fetch(`https://welkinwebsolutions.com.au/wp-json/wp/v2/pages/${route.params.id}`);
          const data = await res.json();
          page.value = data;
        };
        fetchPage();
      });
  
      return {
        page
      };
    }
  };
  </script>
  