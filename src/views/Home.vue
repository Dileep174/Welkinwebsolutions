<script>
// Home.vue
import { computed } from 'vue'
import { useStore } from 'vuex'
import Hero from '../components/Home/Hero.vue'

export default {
  components: { Hero,},
  setup() {
    const store = useStore()
    const sections = computed(() => store.state.sections)

    return {
      sections
    }
  }
}
</script>

<template>
  <div class="content-wrapper">
    <Hero :sections="sections"/>
    <!-- /header -->
    
    <!-- /section -->
    <!-- <WhatWeDo /> -->
    <!-- /section -->


    <!-- Technologies -->
    
    <!-- /section -->

    <!-- Testimonial -->
    
    <!-- /section -->


    <!-- projectcount -->
    
    <!-- /section -->


    <!-- Studies -->
    
    <!-- /section -->

    <!-- Portfolios -->
    
    <!-- /section -->
  </div>
  <!-- /.content-wrapper -->


  
</template>

<style scoped>
</style>