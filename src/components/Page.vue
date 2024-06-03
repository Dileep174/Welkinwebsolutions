// HelloWorld.vue
<template>
  <div>
    <div v-if="error">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else>
      <div v-if="post" class="post-section">
        <h3>{{ post.title.rendered }}</h3>
        <div v-html="post.excerpt.rendered"></div>
        <div v-if="image">
      <img :src="image.source" :alt="image.alt" />
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Page',
  setup() {
    const post = ref(null);
    const error = ref(null);
    const pageId = 9; // Replace with the ID of the page you want to fetch

    onMounted(() => {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`https://techsolution.au//wp-json/wp/v2/pages/${pageId}`);
          post.value = res.data;
        } catch (err) {
          error.value = err.message;
          console.error('Fetch error:', err);
        }
      };
      fetchPost();
    });

    return {
      post,
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
