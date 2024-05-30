<script>
export default {
    name: 'Posts',
    props: {
        wpPosts: {
            type: Array,
            required: true
        }
    }
}
</script>


<template>
     <div v-for="post in wpPosts" :key="post.id" class="post-card">
              <h3>{{ post.title.rendered }}</h3>
              <!-- <h1>{{ post.slug.rendered }}</h1> -->
              <div v-html="post.content.rendered"></div>
          </div>
</template>
