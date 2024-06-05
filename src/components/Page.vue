<template>
  <div>
    <h1>Pages List</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="pages.length">
      <div v-for="page in pages" :key="page.id" class="page-card">
        <h3>{{ page.title.rendered }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchPages } from '../services/apiService';

export default {
  name: 'Page',
  setup() {
    const pages = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        pages.value = await fetchPages();
      } catch (err) {
        error.value = 'Failed to load pages';
      } finally {
        loading.value = false;
      }
    });

    return {
      pages,
      loading,
      error,
    };
  },
};
</script>

<style>
.page-card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
}
</style>
