// HelloWorld.vue
<template>
  <div>
    <h1>HelloWorld</h1>
    <div v-if="error">
      <!-- <p>Error: {{ error }}</p> -->
    </div>
    <div v-else>
      <div v-if="post" class="post-section">
        <!-- <h3>{{ post.acf.hero.title}}</h3> -->
        <!-- <div v-html="post.slug.rendered"></div> -->
        <!-- <h1>{{ post.template }}</h1> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'HelloWorld',
//   setup() {
//     const post = ref(null);
//     const error = ref(null);
//     const pageId = 8; // Replace with the ID of the page you want to fetch

//     onMounted(() => {
//       const fetchPost = async () => {
//         try {
//           const res = await axios.get(`http://localhost/wp/welkin-wp/wp-json/wp/v2/pages/${pageId}`);
//           post.value = res.data;
//         } catch (err) {
//           error.value = err.message;
//           console.error('Fetch error:', err);
//         }
//       };
//       fetchPost();
//     });

//     return {
//       post,
//       error,
//     };
//   },
};
</script>

<style>
.post-section {
  /* Add your styles here */
}
</style>
