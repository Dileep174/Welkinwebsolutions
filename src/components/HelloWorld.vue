
<template>
    <div>
    <h1>Page Detail</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="page">
      <h3>{{ page.title.rendered }}</h3>
      <div v-html="page.acf.hero.title"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchPageById } from '../services/apiService';

export default {
  name: 'HelloWorld',
  props: {
    pageId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const page = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        page.value = await fetchPageById(props.pageId);
      } catch (err) {
        error.value = 'Failed to load page';
      } finally {
        loading.value = false;
      }
    });

    return {
      page,
      loading,
      error,
    };
  },
};
</script>

<style>
.post-section {
  /* Add your styles here */
}
</style>
