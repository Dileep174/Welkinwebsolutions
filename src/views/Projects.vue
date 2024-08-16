<template>
  <div class="content-wrapper">
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

    <Portfolios>
      <template #projects="{ title, description, projects }">
        <section class="wrapper bg-grey">
          <div class="container pt-3 pb-4 pb-md-4">
            <div class="row text-center">
              <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
                <h3 class="display-4 mb-2">{{ title }}</h3>
                <p class="mb-10">{{ description }}</p>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
            <div class="container py-14 py-md-6">
              <div class="grid grid-view projects-masonry">
                <div class="isotope-filter filter mb-10">
                  <p>Filter:</p>
                  <ul>
                    <li><a class="filter-item active" data-filter="*">All</a></li>
                    <li><a class="filter-item" data-filter=".concept">Concept</a></li>
                    <li><a class="filter-item" data-filter=".product">Product</a></li>
                    <li><a class="filter-item" data-filter=".workshop">Workshop</a></li>
                    <li><a class="filter-item" data-filter=".still-life">Still Life</a></li>
                  </ul>
                </div>
                <div class="row gx-md-8 gy-10 gy-md-13 isotope">
                  <div v-for="(project, index) in projects" :key="index" class="project item col-md-6 col-xl-4"
                    :class="project.category">
                    <figure class="lift rounded mb-6">
                      <a :href="project.link">
                        <img :src="project.image" alt="">
                      </a>
                    </figure>
                    <div class="project-details d-flex justify-content-center flex-column">
                      <div class="post-header">
                        <div class="post-category text-line mb-3" :class="project.categoryColor">{{ project.category }}
                        </div>
                        <h2 class="post-title h3">{{ project.title }}</h2>
                      </div>
                      <!-- /.post-header -->
                    </div>
                    <!-- /.project-details -->
                  </div>
                  <!-- /.project -->
                </div>
                <!-- /.row -->
              </div>
              <!-- /.grid -->
            </div>
            <!--/.row -->
          </div>
          <!-- /.container -->
        </section>
      </template>
    </Portfolios>

    <Slider>
      <template #home="{ technologiesTitle, technologies, culyImage }">
        <section class="wrapper bg-soft-primary">
          <div class="container py-44 py-md-4">
            <div class="row mb-2 mt-2">
              <div class="col-lg-12 mx-auto text-center">
                <h3 class="py-10 display-4"> {{ technologiesTitle }} </h3>

                <div class="swiper-container mb-10" data-margin="30" data-nav="true" data-dots="false" data-items-xl="6"
                  data-items-md="2" data-items-xs="1">
                  <div class="swiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(technology, index) in technologies" :key="index">
                        <img :src="technology.image" style="width: 153px; height:35px">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <figure><img :src="culyImage" alt=""></figure>
        </section>
      </template>
    </Slider>

    <Info>
      <template #projects="{aboutImage, aboutTitle, aboutText, contactUsLink, contactUsText}">
        <section class="wrapper bg-white">
          <div class="container align-self-center d-flex">
            <div class="row cardpadding">
              <div class="col-md-12 col-lg-6 align-self-center">
                <img :src="aboutImage" alt="" class="img-fluid">
              </div>
              <div class="col-md-12 col-lg-6 align-self-center">
                <h3 class="display-3 mb-4">{{ aboutTitle }}</h3>
                <p class="mb-2" v-html="aboutText"></p>
                <p class="mb-2" v-html="aboutText"></p>
                <a :href="contactUsLink" class="btn btn-lg btn-grape rounded"> {{ contactUsText }} </a>
              </div>
            </div>
          </div>
        </section>
      </template>
    </Info>
  </div>
</template>

<script>
import Hero from '../components/child/Hero.vue'
import Portfolios from '../components/child/Portfolios.vue'
import Slider from '../components/child/Slider.vue'
import Info from '../components/child/Info.vue'
export default {
  name: 'Projects',
  components: { Hero, Portfolios, Slider, Info },
}
</script>