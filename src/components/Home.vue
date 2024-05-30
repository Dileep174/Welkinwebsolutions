<script>
import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Home',
    setup() {
      const posts = ref([]);
  
      onMounted(() => {
        const fetchPosts = async () => {
          const res = await fetch('https://welkinwebsolutions.com.au/wp-json/wp/v2/pages');
          const data = await res.json();
          posts.value = data;
        };
        fetchPosts();
      });
  
      return {
        posts
      };
    }
  };
</script>
  
<template>


<div>
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h3>
          <router-link :to="{ name: 'Page', params: { id: post.id } }">
            {{ post.title.rendered }}
          </router-link>
        </h3>
        <div v-html="post.excerpt.rendered"></div>
      </div>
    </div>

    

     <div class="content-wrapper">
    <header class="wrapper bg-soft-primary">
      <nav class="navbar navbar-expand-lg center-nav transparent navbar-light bg-white">
        <div class="container flex-lg-row flex-nowrap align-items-center">
          <div class="navbar-brand w-100">
            <a href="index.html">
            <img src="../assets/img/logo.png">
            </a>
          </div>
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div class="offcanvas-header d-lg-none">
              <h3 class="text-white fs-30 mb-0"> Welkin Solutions </h3>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active hover" href="index.html">
                    <div class="menu-item-wrap"> <span class="menu-item-title"> Home </span> </div>
                    </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link hover" href="services.html" >Our Services</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link hover" href="projects.html">Our Projects</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link hover" href="about.html">About Us</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link hover" href="testimonial.html">Testimonials</a>
                </li>


              </ul>
              <!-- /.navbar-nav -->
              <div class="offcanvas-footer d-lg-none">
                <div>
                  <a href="contact.html" class="btn btn-sm btn-primary rounded">Contact Us</a>
                  <br />
                  <nav class="nav social social-white mt-4">
                    <a href="#"><i class="uil uil-twitter"></i></a>
                    <a href="#"><i class="uil uil-facebook-f"></i></a>
                    <a href="#"><i class="uil uil-dribbble"></i></a>
                    <a href="#"><i class="uil uil-instagram"></i></a>
                    <a href="#"><i class="uil uil-youtube"></i></a>
                  </nav>
                  <!-- /.social -->
                </div>
              </div>
              <!-- /.offcanvas-footer -->
            </div>
            <!-- /.offcanvas-body -->
          </div>
          <!-- /.navbar-collapse -->
          <div class="navbar-other w-25 d-flex ms-auto">
            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item d-none d-md-block">
                <a href="contact.html" class="btn btn-sm btn-primary rounded">Contact Us</a>
              </li>
              <li class="nav-item d-lg-none">
                <button class="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
            <!-- /.navbar-nav -->
          </div>
          <!-- /.navbar-other -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navbar -->
    </header>
    <!-- /header -->
    <section class="wrapper bg-soft-primary">
      <div class="container ">
        <div class="row p-40 align-items-center text-center text-lg-start">

          <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
            <div class="mb-4 text-primary">AWARD WINNING COMPANY </div>
            
            <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title" data-delay="600" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">We Are The Best in <br> <span class="typer text-primary text-nowrap" data-delay="100" data-words="Wordpress Development, Custome Development, Website Design, Dgital Marketing, Logo Design" style="color: black;">easy</span><span class="cursor text-primary" data-owner="typer" style="transition: all 0.1s ease 0s; opacity: 0;">|</span></h1>
                
            <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">You need to get positive results when you spend hard <br class="d-none d-md-block d-lg-none" /> earned revenue and time on any marketing effort.
              Great returns on marketing and promotions.  </p>
             
             
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
    <!-- /section -->
    <section class="wrapper bg-grey">
      <div class="container pt-3 pb-4 pb-md-4">
        <div class="row text-center">
          <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
            <h2 class="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
            <h3 class="display-4 mb-2">Grow Your Business </br>With <span class="text-primary"> Welkin Solutions </span>  </h3>
            <p class="mb-10"> tempus, lectus risus In' perdiel tellus, sed faucibus ipsum ipsurn nun neque.  </p>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="row gx-md-8 gy-8 mb-15 mb-md-14 text-center">
        
          <!--/column -->
         
          <div class="col-md-6 col-lg-4">
            <div class="mybox">
              <img src="../assets/img/webdesign.svg" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
              <h1>Web Design</h1>
              <p class="mb-2">Twit are excet  Frond, rnatie boy grub it's tell gone to pot MI Mrs nut butts horse play blow </p>
              <a href="#" class="more hover">Learn More</a>
            </div>
          </div>
          
          <!--/column -->
          <div class="col-md-6 col-lg-4 ">
            <div class="mybox">
              <img src="../assets/img/webdevelopment.svg" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
              <h1>Web Development</h1>
              <p class="mb-2">Twit are excet  Frond, rnatie boy grub it's tell gone to pot MI Mrs nut butts horse play blow </p>
              <a href="#" class="more hover">Learn More</a>
            </div>
          </div>
          <!--/column -->
          <div class="col-md-6 col-lg-4">
            <div class="mybox">
              <img src="../assets/img/media_marketting.svg" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
              <h1>Media Marketing</h1>
              <p class="mb-2"> Twit are excet  Frond, rnatie boy grub it's tell gone to pot MI Mrs nut butts horse play blow </p>
              <a href="#" class="more hover">Learn More</a>
            </div>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->

      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->


  
    <section class="wrapper bg-soft-primary">
      <div class="container py-44 py-md-4">
        <div class="row mb-2 mt-2">
          <div class="col-lg-12 mx-auto text-center">
            <h3 class="py-10 display-4"> Our Technologies  </h3>
            

            <div class="swiper-container mb-10" data-margin="30" data-nav="true" data-dots="false" data-items-xl="6" data-items-md="2" data-items-xs="1">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
               <img src="../assets/img/wp.png" style="width: 153px; height:35px"> 
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide">
                    <img src="../assets/img/shpyfy.png" style="width: 153px; height:35px"> 
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide">
                    <img src="../assets/img/php1.png" style="width: 153px; height:35px"> 
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide">
                    <img src="../assets/img/larave.png" style="width: 153px; height:35px"> 
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide">
                    <img src="../assets/img/codeigniter.png" style="width: 153px; height:35px"> 
                  </div>
                  <!--/.swiper-slide -->
        
                    <!--/.swiper-slide -->
                    <div class="swiper-slide">
                      <img src="../assets/img/clickfunnel 1.png" style="width: 153px; height:35px"> 
                    </div>
                    <!--/.swiper-slide -->
        
                    <div class="swiper-slide">
                      <img src="../assets/img/wp.png" style="width: 153px; height:35px"> 
                         </div>
                         <!--/.swiper-slide -->
                         <div class="swiper-slide">
                           <img src="../assets/img/shpyfy.png" style="width: 153px; height:35px"> 
                         </div>
                         <!--/.swiper-slide -->
                         <div class="swiper-slide">
                           <img src="../assets/img/php1.png" style="width: 153px; height:35px"> 
                         </div>
                         <!--/.swiper-slide -->
                         <div class="swiper-slide">
                           <img src="../assets/img/larave.png" style="width: 153px; height:35px"> 
                         </div>
                         <!--/.swiper-slide -->
                         <div class="swiper-slide">
                           <img src="../assets/img/codeigniter.png" style="width: 153px; height:35px"> 
                         </div>
                         <!--/.swiper-slide -->
         
                           <!--/.swiper-slide -->
                           <div class="swiper-slide">
                             <img src="../assets/img/clickfunnel 1.png" style="width: 153px; height:35px"> 
                           </div>
                           <!--/.swiper-slide -->
        
        
                </div>
                <!--/.swiper-wrapper -->
              </div>
              <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        
        <!-- /.row -->
      </div>
      <!-- /.container -->
      <figure><img src="../assets/img/whiteculy.svg" alt=""></figure>
    </section>
    <!-- /section -->


    <section class="wrapper bg-white">
      <div class="container pt-3 pb-4 pb-md-4">
      
        <!-- /.row -->
        <div class="row gx-md-8 gy-8 mb-15 mb-md-14 d-flex">
        
          <!--/column -->
         
          <div class="col-md-7 col-lg-7 d-flex">
            <div class="testimonialleft">
              <div class="row p-4">
                <div class="col-md-6 col-lg-6">
                  <div class="testimonialbox">
                    <div class="col-md-12 col-lg-12">
                    <div class="fivestar"> <img src="../assets/img/fiveftart.svg" alt="" width="73px" height="10px"> </div>
                    </div>
                    <div class="row mypadding">
                      <div class="col-md-3 col-lg-3"> <img src="../assets/img/profile.png" alt="" width="50px;" height="50px"> </div>
                      <div class="col-md-9 col-lg-9">
                      <P style="margin: 0px; padding: 0px;"> <b>  Name: </b> Mark Parker </P> 
                      <P style="margin: 0px; padding: 0px;"> CEO of Welkin </P>   
                      </div>
                      <div class="testimonialcon">Cura bitur susci pit nequeut lacus interd sit amet dictum nunc eleifend. Mauris pulvinar odio at nunc labortis. <a href="#" class="more hover">Learn More</a>  </div>
                     
                    </div>                  
                                         
                  </div>


                  <div class="testimonialbox mt-4">
                    <div class="col-md-12 col-lg-12">
                    <div class="fivestar"> <img src="../assets/img/fiveftart.svg" alt="" width="73px" height="10px"> </div>
                    </div>
                    <div class="row mypadding">
                      <div class="col-md-3 col-lg-3"> <img src="../assets/img/profile.png" alt="" width="50px;" height="50px"> </div>
                      <div class="col-md-9 col-lg-9">
                      <P style="margin: 0px; padding: 0px;"> <b>  Name: </b> Mark Parker </P> 
                      <P style="margin: 0px; padding: 0px;"> CEO of Welkin </P>   
                      </div>
                      <div class="testimonialcon">Cura bitur susci pit nequeut lacus interd sit amet dictum nunc eleifend. Mauris pulvinar odio at nunc labortis. <a href="#" class="more hover">Learn More</a>  </div>
                     
                    </div>
                    
                     
                    

                  </div>
                
                </div>


                <div class="col-md-6 col-lg-6 mt-4 align-self-center">
                  <div class="testimonialbox">
                    <div class="col-md-12 col-lg-12">
                    <div class="fivestar"> <img src="../assets/img/fiveftart.svg" alt="" width="73px" height="10px"> </div>
                    </div>
                    <div class="row mypadding">
                      <div class="col-md-3 col-lg-3"> <img src="../assets/img/profile.png" alt="" width="50px;" height="50px"> </div>
                      <div class="col-md-9 col-lg-9">
                      <P style="margin: 0px; padding: 0px;"> <b>  Name: </b> Balram Parker </P> 
                      <P style="margin: 0px; padding: 0px;"> CEO of Welkin </P>   
                      </div>
                      <div class="testimonialcon">Cura bitur susci pit nequeut lacus interd sit amet dictum nunc eleifend. Mauris pulvinar odio at nunc labortis. <a href="#" class="more hover">Learn More</a>  </div>
                     
                    </div>
                    
                     
                    

                  </div>
                
                </div>

               
              </div>
              
            </div>
          </div>
          
          <!--/column -->
          <div class="col-md-5 col-lg-5 align-self-center">
            <div class="testimonialright p-xl-10">             
             
                <h2 class="fs-16 text-uppercase text-primary py-10">What Say’s our clients</h2>

                <h3 class="display-3 mb-4 me-xl-5 mt-lg-n10">Clients <br class="d-none d-md-block d-lg-none" /> <span class="text-primary"> Feedback </span></h3>
               
                <p class="mb-2"> Why I say okl chap that is. sprffing aff his rut car blimey valmor gooxo blaka krcus up bobby shed a-50 William cock Richard. Bloke fanny around cheseci   </p>
                <ul class="icon-list bullet-bg bullet-soft-primary mb-2 ">
                  <li><span><i class="uil uil-check"></i></span><span> <span class="testimonialcount"> 451+  </span> Client’s Feedback </span></li>
               </ul>
               
                <a href="#" class="btn btn-lg btn-grape rounded"> View All Client’s Feedback </a>


            </div>
          </div>
          <!--/column -->
        
        </div>
        <!--/.row -->

      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->



    <section class="wrapper projectcount">
      <div class="container py-md-5 py-sm-10 ">
        <div class="row mb-2 mt-2">
          <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">          
            <h1 class="projectc"> 7,511</h1>
            <p class="projectdone"> Projects Done</p>       
          </div>
          <!-- /column -->

          <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">          
            <h1 class="projectc"> 11 +</h1>
            <p class="projectdone"> Years Experience</p>       
          </div>
          <!-- /column -->

          <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">          
            <h1 class="projectc"> 541</h1>
            <p class="projectdone"> Happy Clients</p>       
          </div>
          <!-- /column -->

          <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">          
            <h1 class="projectc"> 5,123</h1>
            <p class="projectdone"> Recognition </p>       
          </div>
          <!-- /column -->

        </div>
        <!-- /.row -->
    
      </div>
      <!-- /.container -->
    
    </section>
    <!-- /section -->



    <section class="wrapper Background1">
      <div class="container pt-5 pt-lg-6 pt-xl-6 pt-xxl-5 pb-lg-5 pb-xl-5 pb-xxl-0">
        <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">

          <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
            <div class="display-12 mb-10 text-primary">Case 143 Studies  </div>
            
            <h3 class="display-3 mb-4 me-xl-5 mt-lg-n10">Case <br class="d-none d-md-block d-lg-none" /> <span class="text-primary"> Studies </span></h3>
            <p class="lead fs-24 lh-sm mb-7 pe-xxl-15"> Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna erat Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna erat </p>
            <div class="d-inline-flex me-2"><a href="#" class="btn btn-lg btn-grape rounded"> Start Your Project </a></div>
          
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
    <!-- /section -->  


    <section class="wrapper Background2">
      <div class="container-fluid px-md-6 pt-3 pb-4 pb-md-4">
        <div class="row text-center pb-7">
          <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
            
            <h3 class="display-4 mb-2"> Our <span class="text-primary"> Portfolios </span>  </h3>
            
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="row mx-auto text-center pb-md-4">
        
          <!--/column -->

          
            <div class="swiper-container blog grid-view mb-14 mb-md-14 swiper-container-0" data-margin="30" data-nav="false" data-dots="true" data-items-xxl="3" data-items-md="2" data-items-xs="1">
              <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper" id="swiper-wrapper-62e6c2b91d356846" aria-live="off" style="cursor: grab; transform: translate3d(-2070.67px, 0px, 0px); transition-duration: 0ms;">
                  <div class="swiper-slide" role="group" aria-label="1 / 7" style="width: 487.667px; margin-right: 30px;">
                    <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp10.jpg" data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp10.jpg" alt=""></a>
                  </figure>
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide" role="group" aria-label="2 / 7" style="width: 487.667px; margin-right: 30px;">
                    <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp11.jpg" data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp11.jpg" alt=""></a>
                    </figure>


              

                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide" role="group" aria-label="3 / 7" style="width: 487.667px; margin-right: 30px;">
                    <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp12.jpg" data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp12.jpg" alt=""></a>
                  </figure>
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide swiper-slide-prev" role="group" aria-label="4 / 7" style="width: 487.667px; margin-right: 30px;">
                    <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp13.jpg" data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp13.jpg" alt=""></a>
                    </figure>
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide swiper-slide-active" role="group" aria-label="5 / 7" style="width: 487.667px; margin-right: 30px;">
                    <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp14.jpg" data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp14.jpg" alt=""></a>
                  </figure>
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide swiper-slide-next" role="group" aria-label="6 / 7" style="width: 487.667px; margin-right: 30px;">
                    <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp15.jpg" data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp15.jpg" alt=""></a>
                  </figure>
                  </div>
                  <!--/.swiper-slide -->
                  <div class="swiper-slide" role="group" aria-label="7 / 7" style="width: 487.667px; margin-right: 30px;">
                    <figure class="itooltip itooltip-light hover-scale rounded"> <a href="../assets/img/pp16.jpg" data-glightbox="" data-gallery="project-1"> <img src="../assets/img/pp16.jpg" alt=""></a>
                  </figure>
                  </div>
                  <!--/.swiper-slide -->
                </div>
                <!--/.swiper-wrapper -->
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              <!-- /.swiper -->
            <div class="swiper-controls"><div class="swiper-navigation"><div class="swiper-button swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-62e6c2b91d356846" aria-disabled="false"></div><div class="swiper-button swiper-button-next swiper-button-disabled" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-62e6c2b91d356846" aria-disabled="true"></div></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 5" aria-current="true"></span></div></div></div>
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
    <!-- /section -->
  </div>
  <!-- /.content-wrapper -->


  <footer class="bg-footer text-inverse">
    <div class="container py-6 py-md-6">
      <div class="row gy-3 gy-lg-0">
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <img class="mb-4" src="../assets/img/logo.png" alt="">
           
            <nav class="nav social social-white">
              <a href="#"><i class="uil uil-twitter"></i></a>
              <a href="#"><i class="uil uil-facebook-f"></i></a>
              <a href="#"><i class="uil uil-dribbble"></i></a>
              <a href="#"><i class="uil uil-instagram"></i></a>
              <a href="#"><i class="uil uil-youtube"></i></a>
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Get in Touch</h4>
            <address class="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address>
            <a href="mailto:#">info@email.com</a> <br>
            <a href="00 (123) 456 78 90">00 (123) 456 78 90 </a>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Navigation</h4>
            <ul class="list-unstyled  mb-0">
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-12 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Our Newsletter</h4>
            <p class="mb-5 text-white">Subscribe to our newsletter to get our news &amp; deals delivered to you.</p>
            <div class="newsletter-wrapper">
              <!-- Begin Mailchimp Signup Form -->
              <div id="mc_embed_signup2">
                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" class="validate dark-fields" target="_blank" novalidate="">
                  <div id="mc_embed_signup_scroll2">
                    <div class="mc-field-group input-group form-floating">
                      <input type="email" value="" name="EMAIL" class="required email form-control" placeholder="Email Address" id="mce-EMAIL2">
                      <label for="mce-EMAIL2">Email Address</label>
                      <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe2" class="btn btn-primary ">
                    </div>
                    <div id="mce-responses2" class="clear">
                      <div class="response" id="mce-error-response2" style="display:none"></div>
                      <div class="response" id="mce-success-response2" style="display:none"></div>
                    </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value=""></div>
                    <div class="clear"></div>
                  </div>
                </form>
              </div>
              <!--End mc_embed_signup-->
            </div>
            <!-- /.newsletter-wrapper -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->

        <hr class="mt-6 mt-md-5 mb-3" style="color:#fff;">
        <div class="d-md-flex align-items-center justify-content-center">
          <p class="mb-0 mb-lg-0 text-white">© Copyright © 2022 welkin solutions All Rights Reserved.Terms of Use | Privacy Policy | Disclaimer</p>
       
          <!-- /.social -->
        </div>

      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </footer>
</template>

<style scoped>
.post-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
}
</style>