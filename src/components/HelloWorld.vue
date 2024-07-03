<!-- src/components/SinglePage.vue -->
<template>
    <div v-if="page">
      <h1>{{ page.title.rendered }}</h1>
      <div v-html="page.content.rendered"></div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'HelloWorld',
    setup() {
      const store = useStore();
      const route = useRoute();
      const pageId = route.params.id;
  
      onMounted(() => {
        store.dispatch('fetchPageById', pageId);
      });
  
      return {
        page: store.getters.singlePage,
      };
    },
  };
  </script>
  