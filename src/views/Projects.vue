<template>
  <Hero>
    <template #projects="{ projectCount, title, description, buttonText, projects, cloudsImage }">
      <section class="wrapper bg-soft-primary">
        <div class="container">
          <div class="row p-50">
            <div class="col-md-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
              <div class="mb-4 text-primary">{{ projectCount }}</div>
              <h1 class="display-1 mb-5 mx-md-10 mx-lg-0">{{ title }}</h1>
              <p class="lead fs-24 lh-sm mb-7">{{ description }}</p>
              <div class="d-inline-flex me-2">
                <router-link to="/our-projects" class="btn btn-lg btn-grape rounded">{{ buttonText }}</router-link>
              </div>
            </div>
            <!--/column -->
            <div class="col-md-6" data-cue="zoomIn" data-show="true"
              style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
              <img class="img-fluid" :src="projects" data-cue="fadeIn" data-delay="300" alt="" />
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
</template>

<script>
import Hero from '../components/child/Hero.vue'
export default {
  name: 'Projects',
  components: { Hero },
}
</script>