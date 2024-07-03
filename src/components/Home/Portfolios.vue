<template>
  <div v-if="page">
    <h1>{{ page.title.rendered }}</h1> 
    <div v-html="page.content.rendered"></div>
    <h2>{{ page.acf.grow_business.title }}</h2>
  </div>
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
                <div class="swiper-slide" role="group" aria-label="1 / 7" style="width: 487.667px; margin-right: 30px;">
                  <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp10.jpg"
                      data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp10.jpg" alt=""></a>
                  </figure>
                </div>
                <!--/.swiper-slide -->
                <div class="swiper-slide" role="group" aria-label="2 / 7" style="width: 487.667px; margin-right: 30px;">
                  <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp11.jpg"
                      data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp11.jpg" alt=""></a>
                  </figure>




                </div>
                <!--/.swiper-slide -->
                <div class="swiper-slide" role="group" aria-label="3 / 7" style="width: 487.667px; margin-right: 30px;">
                  <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp12.jpg"
                      data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp12.jpg" alt=""></a>
                  </figure>
                </div>
                <!--/.swiper-slide -->
                <div class="swiper-slide swiper-slide-prev" role="group" aria-label="4 / 7"
                  style="width: 487.667px; margin-right: 30px;">
                  <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp13.jpg"
                      data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp13.jpg" alt=""></a>
                  </figure>
                </div>
                <!--/.swiper-slide -->
                <div class="swiper-slide swiper-slide-active" role="group" aria-label="5 / 7"
                  style="width: 487.667px; margin-right: 30px;">
                  <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp14.jpg"
                      data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp14.jpg" alt=""></a>
                  </figure>
                </div>
                <!--/.swiper-slide -->
                <div class="swiper-slide swiper-slide-next" role="group" aria-label="6 / 7"
                  style="width: 487.667px; margin-right: 30px;">
                  <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp15.jpg"
                      data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp15.jpg" alt=""></a>
                  </figure>
                </div>
                <!--/.swiper-slide -->
                <div class="swiper-slide" role="group" aria-label="7 / 7" style="width: 487.667px; margin-right: 30px;">
                  <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp16.jpg"
                      data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp16.jpg" alt=""></a>
                  </figure>
                </div>
                <!--/.swiper-slide -->
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
                  aria-label="Next slide" aria-controls="swiper-wrapper-62e6c2b91d356846" aria-disabled="true"></div>
              </div>
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span class="swiper-pagination-bullet" tabindex="0" role="button"
                  aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button"
                  aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button"
                  aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button"
                  aria-label="Go to slide 4"></span><span
                  class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button"
                  aria-label="Go to slide 5" aria-current="true"></span>
              </div>
            </div>
          </div>
          <!-- /.swiper-container -->






          <!--/column -->

          <div class="row text-center ">
            <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">

              <a href="#" class="btn btn-lg btn-grape rounded"> View Portfolios </a>

            </div>
            <!-- /column -->
          </div>
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </section>
</template>

<script>
export default {
  name: 'Portfolios',
  props: {
    page: Object
  }
}
</script>