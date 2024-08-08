<template>
  <Hero>
    <template #about="{subTitle, title, typerText, description, buttonText, about, cloudsImage}">
      <section class="wrapper bg-soft-primary">
    <div class="container pt-5 pt-lg-6 pt-xl-6 pt-xxl-5 pb-lg-5 pb-xl-5 pb-xxl-0">
      <div class="row gx-md-8 gx-xl-12 gy-10 pt-8 pb-10 align-items-center text-center text-lg-start">
        <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
          <div class="mb-4 text-primary">{{ subTitle }}</div>
          <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title" data-delay="600" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
            {{ title }}<br>
            <span class="typer text-primary text-nowrap" data-delay="100" data-words="Yes Possible!" style="color: black;">{{ typerText }}</span>
            <span class="cursor text-primary" data-owner="typer" style="transition: all 0.1s ease 0s; opacity: 0;">|</span>
          </h1>
          <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">{{ description }}</p>
          <div class="d-inline-flex me-2">
            <router-link to="/our-projects" class="btn btn-lg btn-grape rounded">{{ buttonText }}</router-link>
          </div>
        </div>
        <!--/column -->
        <div class="col-10 col-md-7 col-lg-6" data-cue="zoomIn" data-show="true" style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
          <img class="img-fluid" :src="about" data-cue="fadeIn" data-delay="300" alt="" />
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <figure><img :src="cloudsImage" alt=""></figure>
  </section>
    </template>
  </Hero>
  <Cards>
    <template #about="{title, about_services}">
  <section class="wrapper bg-grey">
    <div class="container pt-3 pb-4 pb-md-4">
      <div class="row text-center">
        <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
          <h3 class="display-4 mb-7" v-html="title"></h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gy-8 mb-15 mb-md-14 text-center">
        <div v-for="(service, index) in about_services" :key="index" class="col-md-6 col-lg-4">
          <div class="mybox" :class="service.className">
            <img :src="service.icon" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
            <h1>{{ service.title }}</h1>
            <p class="mb-2">{{ service.description }}</p>
            <a href="#" class="more hover">Learn More</a>
          </div>
        </div>
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>
  </Cards>
  </template>
  
  <script>
  import Hero from '../components/child/Hero.vue'
  import Cards from '../components/child/Cards.vue'
  export default {  
    name: "About",  
    components: {
      Hero, Cards
    }
  }
  </script>