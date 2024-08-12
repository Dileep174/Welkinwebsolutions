<template>
  <div class="content-wrapper">
    <Hero>
      <template #home="{ subTitle, title, description, mySlider, cloudsImage }">
        <section class="wrapper bg-soft-primary">
          <div class="container ">
            <div class="row p-40 align-items-center text-center text-lg-start">

              <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
                <div class="mb-4 text-primary">{{ subTitle }}</div>
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

                <div class="d-inline-flex me-2"><router-link to="/our-projects" class="btn btn-lg btn-grape rounded">
                    Start Your Project</router-link>
                </div>

              </div>
              <!--/column -->
              <div class="col-10 col-md-7 col-lg-6" data-cue="zoomIn" data-show="true"
                style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                <img class="img-fluid" :src="mySlider" data-cue="fadeIn" data-delay="300" />
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
      <template #home="{ subTitle, title, companyName, description, services }">
        <section class="wrapper bg-grey">
          <div class="container pt-3 pb-4 pb-md-4">
            <div class="row text-center">
              <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
                <h2 class="fs-16 text-uppercase text-primary mb-3">{{ subTitle }}</h2>
                <h3 class="display-4 mb-2">{{ title }}<br>With <span class="text-primary">{{ companyName }}</span></h3>
                <p class="mb-10">{{ description }}</p>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
            <div class="row gx-md-8 gy-8 mb-15 mb-md-14 text-center">
              <div class="col-md-6 col-lg-4" v-for="(service, index) in services" :key="index">
                <div class="mybox">
                  <img :src="service.icon"
                    class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
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
  </div>
</template>

<script>
import Hero from '../components/child/Hero.vue'
import Cards from '../components/child/Cards.vue'
import Slider from '../components/child/Slider.vue'
import Testimonials from '../components/child/Testimonials.vue'
import ProjectCount from '../components/child/ProjectCount.vue'
import Studies from '../components/child/Studies.vue'
import Portfolios from '../components/child/Portfolios.vue'

export default {
  name: 'Home',

  components: {
    Hero, Cards, Slider, Testimonials, ProjectCount, Studies, Portfolios,
  },
};
</script>
