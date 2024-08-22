<template>
    <section class="wrapper bg-white">
      <div class="container pt-3 pb-4 pb-md-4">
      
        <!-- /.row -->
        <div class="row gx-md-8 gy-8 mb-15 mb-md-14 d-flex">
    <div class="col-md-7 col-lg-7 d-flex">
      <div class="testimonialleft">
        <div class="row p-4">
          <div class="col-md-6 col-lg-6 p-2" v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'first-column': index === 1 }">
            <div class="testimonialbox">
              <div class="col-md-12 col-lg-12">
                <div class="fivestar">
                  <img src="../../assets/img/fiveftart.svg" alt="" width="73px" height="10px">
                </div>
              </div>
              <div class="row mypadding">
                <div class="col-md-3 col-lg-3">
                  <img :src="testimonial.profileImage" alt="" width="50px;" height="50px">
                </div>
                <div class="col-md-9 col-lg-9">
                  <p style="margin: 0px; padding: 0px;"><b> Name: </b> {{ testimonial.name }} </p>
                  <p style="margin: 0px; padding: 0px;"> {{ testimonial.designation }} </p>
                </div>
                <div class="testimonialcon">
                  {{ testimonial.feedback }}
                  <router-link to="/testimonials" class="more hover">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 col-lg-5 align-self-center">
      <div class="testimonialright p-xl-10">
        <h2 class="fs-16 text-uppercase text-primary py-10">What Say’s our clients</h2>
        <h3 class="display-3 mb-4 me-xl-5 mt-lg-n10">Clients <br class="d-none d-md-block d-lg-none" /> <span class="text-primary"> Feedback </span></h3>
        <p class="mb-2"> {{ clientsFeedback }} </p>
        <ul class="icon-list bullet-bg bullet-soft-primary mb-2">
          <li><span><i class="uil uil-check"></i></span><span> <span class="testimonialcount"> {{ feedbackCount }} </span> Client’s Feedback </span></li>
        </ul>
        <router-link to="/testimonials" class="btn btn-lg btn-grape rounded"> View All Client’s Feedback </router-link>
      </div>
    </div>
  </div>
        <!--/.row -->

      </div>
      <!-- /.container -->
    </section>
  </template>
  
  <script>
  import rate from '../../assets/img/fiveftart.svg'
  import profile from '../../assets/img/profile.png'
  export default {
    name: 'clients',
    data() {
      return {
        testimonials: [
          {
            ratingImage: rate,
            profileImage: profile,
            name: 'Mark Parker',
            designation: 'CEO of Welkin',
            feedback: 'Cura bitur susci pit nequeut lacus interd sit amet dictum nunc eleifend. Mauris pulvinar odio at nunc labortis.'
          },
          {
            styleObject:"top-space",
            ratingImage: rate,
            profileImage: profile,
            name: 'Mark Parker',
            designation: 'CEO of Welkin',
            feedback: 'Cura bitur susci pit nequeut lacus interd sit amet dictum nunc eleifend. Mauris pulvinar odio at nunc labortis.'
          },
          {
            ratingImage: rate,
            profileImage: profile,
            name: 'Balram Parker',
            designation: 'CEO of Welkin',
            feedback: 'Cura bitur susci pit nequeut lacus interd sit amet dictum nunc eleifend. Mauris pulvinar odio at nunc labortis.'
          }
        ],
        clientsFeedback: 'Why I say okl chap that is. sprffing aff his rut car blimey valmor gooxo blaka krcus up bobby shed a-50 William cock Richard. Bloke fanny around cheseci',
        testimonialsCount: 451
      }
    }
  }
  </script>

  <style>
.first-column{
  transform: translate(0, 50%);
}
</style>