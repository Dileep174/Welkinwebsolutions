<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'HelloWorld',
    setup() {
        const posts = ref([]);

        onMounted(() => {
            const fetchPosts = async () => {
                const res = await fetch(
                    'https://welkinwebsolutions.com.au/wp-json/wp/v2/pages'
                );
                const data = await res.json();
                posts.value = data;
            };
            fetchPosts();
        });

        return {
            posts,
        };
    },
};
</script>

<template>
    <div v-for="post in posts" :key="post.id" class="post-card">
        <h3>{{ post.title.rendered }}</h3>
        <!-- <h1>{{ post.slug.rendered }}</h1> -->
        <!-- <div v-html="post.content.rendered"></div> -->
    </div>
</template>