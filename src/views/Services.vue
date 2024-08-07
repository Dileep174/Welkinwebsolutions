<template>

  <Hero>
    <template #services="{ subTitle, title, typerText, description, buttonText, services, cloudsImage }">
      <section class="wrapper about-primary">
        <div class="container">
          <div class="row p-30 align-items-center text-center text-lg-start">
            <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
              <div class="mb-4 text-primary">{{ subTitle }}</div>
              <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title"
                data-delay="600" data-show="true"
                style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
                {{ title }}<br>
                <span class="typer text-primary text-nowrap" data-delay="100"
                  data-words="stack developer, stack developer, stack developer, stack developer, stack developer"
                  style="color: black;">{{ typerText }}</span>
                <span class="cursor text-primary" data-owner="typer"
                  style="transition: all 0.1s ease 0s; opacity: 0;">|</span>
              </h1>
              <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">{{ description }}</p>
              <div class="d-inline-flex me-2">
                <router-link to="/our-projects" class="btn btn-lg btn-grape rounded">{{ buttonText }}</router-link>
              </div>
            </div>
            <!--/column -->
            <div class="col-10 col-md-7 col-lg-6" data-cue="zoomIn" data-show="true"
              style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
              <img class="img-fluid" :src="services" data-cue="fadeIn" data-delay="300" alt="" />
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
    <template
      #services="{ subTitle, title, companyName, description, service1, service2, dotImage, circleImage, logoImage }">
      <section class="wrapper bg-grey">
        <div class="container pt-3 pb-4 pb-md-4">
          <div class="row text-center">
            <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
              <div class="smallcircle1"> <img :src="dotImage" alt=""> </div>
              <div class="smallcircle"> <img :src="circleImage" alt=""> </div>
              <h2 class="fs-16 text-uppercase text-primary mb-3">{{ subTitle }}</h2>
              <h3 class="display-4 mb-2">{{ title }} <br><span class="text-primary">{{ companyName }}</span></h3>
              <p class="mb-10">{{ description }}</p>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
          <div class="row gx-md-12 gy-0 mb-15 mb-md-14 text-center">
            <div class="col-md-12 col-lg-4 m-0 p-0">
              <div class="aboutbox">
                <div class="col-lg-12 order-lg-12" v-for="(serv, index) in service1" :key="index">
                  <div class="card me-lg-1">
                    <div class="card-body p-4">
                      <h4 class="mb-1">{{ serv.title }}</h4>
                      <div class="d-flex flex-row">
                        <div>
                          <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"><span class="number">{{
      serv.number }}</span></span>
                        </div>
                        <div>
                          <p class="mb-0">{{ serv.description }}</p>
                        </div>
                      </div>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
              </div>
            </div>
            <!--/column -->
            <div class="col-md-3 col-lg-4 mt-7 p-0">
              <div class="aboutbox">
                <img :src="logoImage" class="img-fluid">
              </div>
            </div>
            <!--/column -->
            <div class="col-md-12 col-lg-4 m-0 p-0">
              <div class="aboutbox">
                <div class="col-lg-12 order-lg-12" v-for="(serv, index) in service2" :key="index">
                  <div class="card me-lg-1">
                    <div class="card-body p-4">
                      <h4 class="mb-1">{{ serv.title }}</h4>
                      <div class="d-flex flex-row">
                        <div>
                          <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"><span class="number">{{
                              serv.number }}</span></span>
                        </div>
                        <div>
                          <p class="mb-0">{{ serv.description }}</p>
                        </div>
                      </div>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
              </div>
            </div>
          </div>
          <!--/.row -->
        </div>
        <!-- /.container -->
      </section>
    </template>
  </Cards>
  <Technologies>
  <template #home="{technologiesTitle, technologies,}">
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
</Technologies>
</template>

<script>
import Hero from '../components/child/Hero.vue'
import Cards from '../components/child/Cards.vue'
import Technologies from '../components/child/Technologies.vue'
export default {
  name: 'Services',
  components: { Hero, Cards, Technologies },
}
</script>