<!-- src/components/Home.vue -->
<template>
  <div>
    <Hero :page="page"/>
    <WhatWeDo :page="page"/>
    <Technologies :page="page"/>
    <Testimonials :page="page"/>
    <ProjectCount :page="page"/>
    <Studies :page="page"/>
    <Portfolios :page="page"/>
  </div>
</template>

<script>
import Hero from '../components/Home/Hero.vue';
import WhatWeDo from '../components/Home/WhatWeDo.vue'
import Technologies from '../components/Home/Technologies.vue'
import Testimonials from '../components/Home/Testimonials.vue'
import ProjectCount from '../components/Home/ProjectCount.vue'
import Studies from '../components/Home/Studies.vue'
import Portfolios from '../components/Home/Portfolios.vue'
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const pageId = 8

    onMounted(() => {
      store.dispatch('fetchPageById', pageId)
      theme.init()
      TyperSetup()
    })

    return {
      page: store.getters.singlePage,
    }
  },
  components: {
    Hero, WhatWeDo, Technologies, Testimonials, ProjectCount, Studies, Portfolios, 
    },
};
</script>
