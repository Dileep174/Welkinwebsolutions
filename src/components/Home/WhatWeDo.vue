<!-- WhatWeDo.vue -->
<template>
  <!-- <section class="wrapper bg-grey">
    <div class="container pt-3 pb-4 pb-md-4">
      <div class="row text-center" v-if="page">
        <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">{{ page.acf.grow_business.title }}</h2>
          <h3 class="display-4 mb-2" v-html="page.acf.grow_business.subtitle"></h3>
          <p class="mb-10">{{ page.acf.grow_business.description }}</p>
        </div>
      </div>
      <div class="row gx-md-8 gy-8 mb-15 mb-md-14 text-center">
        <div v-for="item in pages" :key="item.id" class="col-md-6 col-lg-4">
          <div class="mybox">
            <img :src="item.acf.icon" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
            <h1>{{ item.acf.title }}</h1>
            <p class="mb-2">{{ item.acf.description }}</p>
            <a :href="item.acf.learn_more" class="more hover">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section class="wrapper bg-grey">
      <div class="container pt-3 pb-4 pb-md-4">
        <div class="row text-center">
          <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
            <h2 class="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
            <h3 class="display-4 mb-2">Grow Your Business </br>With <span class="text-primary"> Welkin Solutions </span>  </h3>
            <p class="mb-10"> tempus, lectus risus In' perdiel tellus, sed faucibus ipsum ipsurn nun neque.  </p>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="row gx-md-8 gy-8 mb-15 mb-md-14 text-center">
        
          <!--/column -->
         
          <div class="col-md-6 col-lg-4">
            <div class="mybox">
              <img src="../../assets/img/webdesign.svg" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
              <h1>Web Design</h1>
              <p class="mb-2">Twit are excet  Frond, rnatie boy grub it's tell gone to pot MI Mrs nut butts horse play blow </p>
              <a href="#" class="more hover">Learn More</a>
            </div>
          </div>
          
          <!--/column -->
          <div class="col-md-6 col-lg-4 ">
            <div class="mybox">
              <img src="../../assets/img/webdevelopment.svg" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
              <h1>Web Development</h1>
              <p class="mb-2">Twit are excet  Frond, rnatie boy grub it's tell gone to pot MI Mrs nut butts horse play blow </p>
              <a href="#" class="more hover">Learn More</a>
            </div>
          </div>
          <!--/column -->
          <div class="col-md-6 col-lg-4">
            <div class="mybox">
              <img src="../../assets/img/media_marketting.svg" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
              <h1>Media Marketing</h1>
              <p class="mb-2"> Twit are excet  Frond, rnatie boy grub it's tell gone to pot MI Mrs nut butts horse play blow </p>
              <a href="#" class="more hover">Learn More</a>
            </div>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->

      </div>
      <!-- /.container -->
    </section>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'WhatWeDo',
  props: {
    page: Object
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('fetchPages');
    });

    return {
      pages: store.getters.allPages,
    };
  },
  mounted() {
    // Use the plugin
    theme.init();
      TyperSetup();
  },

}
</script>

<style scoped>
.icon-svg.icon-svg-md {
    width: 2rem;
    height: 2rem;
}

img.svg-inject {
    visibility: visible;
}
</style>