<template>
<Hero><template #home="{ subTitle, title, description, image, cloudsImage}">
    <section class="wrapper bg-soft-primary">
        <div class="container ">
          <div class="row p-40 align-items-center text-center text-lg-start">

            <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
              <div class="mb-4 text-primary">{{subTitle}}</div>
              <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title"
                data-delay="600" data-show="true"
                style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
                {{ title }}<br>
                <span class="typer text-primary text-nowrap" data-delay="100"
                  data-words="Wordpress Development, Custome Development, Website Design, Dgital Marketing, Logo Design"
                  style="color: black;">easy</span><span class="cursor text-primary" data-owner="typer"
                  style="transition: all 0.1s ease 0s; opacity: 0;">|</span>
              </h1>

              <p class="lead fs-24 lh-sm mb-7 pe-xxl-15" v-html="description"></p>

              <div class="d-inline-flex me-2"><router-link to="/our-projects" class="btn btn-lg btn-grape rounded"> Start Your Project</router-link>
              </div>

            </div>
            <!--/column -->
            <div class="col-10 col-md-7 col-lg-6" data-cue="zoomIn" data-show="true"
              style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
              <img class="img-fluid" :src="image" data-cue="fadeIn" data-delay="300" />
            </div>
            <!--/column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
        <figure><img :src="cloudsImage" alt=""></figure>
      </section>
    </template></Hero>
    <Hero #home>

    </Hero>
</template>

<script>
import Hero from '../components/Home/Hero.vue';
import WhatWeDo from '../components/Home/WhatWeDo.vue'
import Technologies from '../components/Home/Technologies.vue'
import Testimonials from '../components/Home/Testimonials.vue'
import ProjectCount from '../components/Home/ProjectCount.vue'
import Studies from '../components/Home/Studies.vue'
import Portfolios from '../components/Home/Portfolios.vue'
// import { onMounted } from 'vue';
// import { useStore } from 'vuex';

export default {
  name: 'Home',
  // setup() {
  //   const store = useStore();
  //   const  pageid = 8;

  //   onMounted(() => {
  //     store.dispatch('fetchPageById', pageid);
  //   });

  //   return {
  //     page: store.getters.singlePage,
  //   };
  // },

  
  components: {
    Hero, WhatWeDo, Technologies, Testimonials, ProjectCount, Studies, Portfolios,
  },
};
</script>
