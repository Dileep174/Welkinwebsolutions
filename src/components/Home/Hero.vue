<!-- HomeHero.vue -->
<template>
    <section class="wrapper bg-soft-primary">
      <div class="container ">
        <div v-if="sections">
    <h2>{{ sections.title }}</h2>
    <!-- <p>{{ sections[0].description }}</p> -->
  </div>
        <div class="row p-40 align-items-center text-center text-lg-start" >

          <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" v-for="section in sections" :key="section.id">
            <!-- <h1>{{ section[0] }}</h1> -->
            <!-- <div class="mb-4 text-primary" >{{ page.acf.hero.title }}</div> -->
            
            
            <!-- <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title" data-delay="600" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
              {{ page.acf.hero.heading.fix_heading }}<br> 
              <span class="typer text-primary text-nowrap" data-delay="100" data-words="page.acf.hero.heading.rewrite.split(',')" style="color: black;">easy</span>
              <span class="cursor text-primary" data-owner="typer" style="transition: all 0.1s ease 0s; opacity: 0;">|</span>
            </h1> -->
                
            <!-- <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">{{ page.acf.hero.description }}</p> -->
             
             
              <div class="d-inline-flex me-2"><a href="#" class="btn btn-lg btn-grape rounded"> Start Your Project </a></div>
          
          </div>
          <!--/column -->
          <div class="col-10 col-md-7 col-lg-6" data-cue="zoomIn" data-show="true" style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
            <img class="img-fluid" src="../assets/img/myslider.png" data-cue="fadeIn" data-delay="300" alt="" />
          </div>
          <!--/column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
      <figure><img src="../assets/img/clouds.png" alt=""></figure>
    </section> 
  </template>
  
  <script>

export default {
  props: {
    sections: {
      type: Array,
      required: true
    }
  }
}
  </script>