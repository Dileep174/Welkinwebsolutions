<script>
export default {
    name: 'Posts',
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>


<template>
     <div v-for="post in posts" :key="post.id" class="post-card">
              <h3>{{ post.acf.hero.title }}</h3>
              <!-- <h1>{{ post.slug.rendered }}</h1> -->
              <!-- <div v-html="post.content.rendered"></div> -->
          </div>
</template>
