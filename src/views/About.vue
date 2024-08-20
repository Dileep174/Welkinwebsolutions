<template>
  <div class="content-wrapper">

    <Hero>
      <template #about="{ subTitle, title, typerText, description, buttonText, about, cloudsImage }">
        <section class="wrapper bg-soft-primary">
          <div class="container pt-5 pt-lg-6 pt-xl-6 pt-xxl-5 pb-lg-5 pb-xl-5 pb-xxl-0">
            <div class="row gx-md-8 gx-xl-12 gy-10 pt-8 pb-10 align-items-center text-center text-lg-start">
              <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
                <div class="mb-4 text-primary">{{ subTitle }}</div>
                <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title"
                  data-delay="600" data-show="true"
                  style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
                  {{ title }}<br>
                  <span class="typer text-primary text-nowrap" data-delay="100" data-words="Yes Possible!"
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
      <template #about="{ title, about_services }">
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

    <Info>
      <template #about="{ aboutImage, aboutSubtitle, aboutTitle, aboutText, viewAllLink, viewAllText }">
        <section class="wrapper bg-white">
          <div class="container">
            <div class="row d-flex cardpadding">
              <div class="col-md-5 col-lg-4 align-self-center">
                <img :src="aboutImage" alt="" class="img-fluid">
              </div>
              <div class="col-md-7 col-lg-8">
                <div class="testimonialright align-self-center">
                  <h2 class="fs-16 text-uppercase text-primary py-10">{{ aboutSubtitle }}</h2>
                  <h3 class="display-3 mb-4 me-xl-5 mt-lg-n10">{{ aboutTitle }} <br
                      class="d-none d-md-block d-lg-none" /> <span class="text-primary">{{ aboutTitleSuffix }}</span>
                  </h3>
                  <p class="mb-2" v-html="aboutText"></p>
                  <p class="mb-2" v-html="aboutText"></p>
                  <a :href="viewAllLink" class="btn btn-lg btn-grape rounded">{{ viewAllText }}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </Info>

    <Slider>
      <template #about="{ technologiesTitle, technologies, culyImage }">
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

    <Vision>
    </Vision>

    <!-- <Form></Form> -->

    <section class="wrapper bg-grey">
      <div class="container">
        <div class="row d-flex cardpadding">
          <div class="col-md-5 col-lg-6 align-self-center">
            <div class="contactbox p-5">
              <h2 class="text-uppercase text-primary line-high">{{ contactTitle }}</h2>
              <p>{{ contactDescription }}</p>
                <!-- form -->
                 <Form></Form>
            </div>
          </div>
          <div class="col-md-7 col-lg-6">
            <div class="row">
              <div class="col-md-6" v-for="(testimonial, index) in testimonials" :key="index">
                <div class="bg-rating text-center">
                  <div class="orangestrip"></div>
                  <div class="text-center">
                    <img :src="testimonial.image" alt="" class="img-fluid profileimg">
                  </div>
                  <div class="boxcontent">
                    <div class="name"> <b>{{ testimonial.name }} </b> </div>
                    <div class="position"> -{{ testimonial.position }} </div>
                    <div class="rating mt-2"> <img src="../assets/img/rating.png" alt=""> </div>
                    <p class="mt-5">{{ testimonial.text }}</p>
                  </div>
                </div>
              </div>
              <router-link to="/testimonials" class="btn btn-sm btn-grape rounded"> Read More </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

          <script>
          import Hero from '../components/child/Hero.vue'
          import Cards from '../components/child/Cards.vue'
          import Info from '../components/child/Info.vue'
          import Slider from '../components/child/Slider.vue'
          import Vision from '../components/child/Vision.vue'
          import Form from '../components/child/projectForm.vue'
          import profile from '../assets/img/profile2.png'
          export default {
            name: "About",
            components: {
              Hero, Cards, Info, Slider, Vision, Form
            },
            data() {
              return {
                contactTitle: 'Discuss your project',
                contactDescription: 'We are a team of 50+ professionals, who deliver only top quality web solutions.',
                
                testimonials: [
                  {
                    image: profile,
                    name: 'John Doe',
                    position: 'Manager',
                    text: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
                  },
                  {
                    image: profile,
                    name: 'John Doe',
                    position: 'Manager',
                    text: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem ”'
                  }
                ]
              }
            }
          }
</script>