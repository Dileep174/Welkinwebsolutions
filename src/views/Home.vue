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

    <clients>

    </clients>

    <counter>
    </counter>

    <Info>
      <template #home="{ description, buttonText, buttonClass }">
        <section class="wrapper Background1">
          <div class="container pt-5 pt-lg-6 pt-xl-6 pt-xxl-5 pb-lg-5 pb-xl-5 pb-xxl-0">
            <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
              <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
                <div class="display-12 mb-10 text-primary">Case 143 Studies </div>
                <h3 class="display-3 mb-4 me-xl-5 mt-lg-n10">Case <br class="d-none d-md-block d-lg-none" /> <span
                    class="text-primary"> Studies </span></h3>
                <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">{{ description }}</p>
                <div class="d-inline-flex me-2">
                  <router-link :class="buttonClass" to="/our-projects">
                    {{ buttonText }}
                  </router-link>
                </div>
              </div>
              <!--/column -->
              <div class="col-10 col-md-7 col-lg-6">
                <img class="img-fluid" src="../assets/img/casestudy.png" data-cue="fadeIn" data-delay="300" alt="" />
              </div>
              <!--/column -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
          <figure><img src="../assets/img/clouds.png" alt=""></figure>
        </section>
      </template>
    </Info>

    <Portfolios>
      <template #home="{ images }">
        <section class="wrapper Background2">
          <div class="container-fluid px-md-6 pt-3 pb-4 pb-md-4">
            <div class="row text-center pb-7">
              <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">

                <h3 class="display-4 mb-2"> Our <span class="text-primary"> Portfolios </span> </h3>

              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
            <div class="row mx-auto text-center pb-md-4">

              <!--/column -->


              <div class="swiper-container blog grid-view mb-14 mb-md-14 swiper-container-0" data-margin="30"
                data-nav="false" data-dots="true" data-items-xxl="3" data-items-md="2" data-items-xs="1">
                <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                  <div class="swiper-wrapper" id="swiper-wrapper-62e6c2b91d356846" aria-live="off"
                    style="cursor: grab; transform: translate3d(-2070.67px, 0px, 0px); transition-duration: 0ms;">
                    <div class="swiper-slide" role="group" aria-label="1 / 7"
                      style="width: 487.667px; margin-right: 30px;" v-for="(image, index) in images" :key="index">
                      <figure class="itooltip itooltip-light hover-scale rounded">
                        <a :href="image.src" data-glightbox="" data-gallery="project-1">
                          <img :src="image.src" alt=""></a>
                      </figure>
                    </div>
                  </div>
                  <!--/.swiper-wrapper -->
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <!-- /.swiper -->
                <div class="swiper-controls">
                  <div class="swiper-navigation">
                    <div class="swiper-button swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"
                      aria-controls="swiper-wrapper-62e6c2b91d356846" aria-disabled="false"></div>
                    <div class="swiper-button swiper-button-next swiper-button-disabled" tabindex="-1" role="button"
                      aria-label="Next slide" aria-controls="swiper-wrapper-62e6c2b91d356846" aria-disabled="true">
                    </div>
                  </div>
                  <div
                    class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span class="swiper-pagination-bullet" tabindex="0" role="button"
                      aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0"
                      role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet"
                      tabindex="0" role="button" aria-label="Go to slide 3"></span><span
                      class="swiper-pagination-bullet" tabindex="0" role="button"
                      aria-label="Go to slide 4"></span><span
                      class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button"
                      aria-label="Go to slide 5" aria-current="true"></span></div>
                </div>
              </div>
              <!-- /.swiper-container -->






              <!--/column -->

              <div class="row text-center ">
                <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">

                  <router-link to="/our-projects" class="btn btn-lg btn-grape rounded"> View Portfolios </router-link>

                </div>
                <!-- /column -->
              </div>
            </div>
            <!--/.row -->
          </div>
          <!-- /.container -->
        </section>
      </template>
    </Portfolios>
  </div>
</template>

<script>
import Hero from '../components/child/Hero.vue'
import Cards from '../components/child/Cards.vue'
import Slider from '../components/child/Slider.vue'
import clients from '../components/child/clients.vue'
import counter from '../components/child/counter.vue'
import Info from '../components/child/Info.vue'
import Portfolios from '../components/child/Portfolios.vue'

export default {
  name: 'Home',

  components: {
    Hero, Cards, Slider, clients, counter, Info, Portfolios,
  },
};
</script>
