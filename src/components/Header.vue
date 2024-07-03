<template>
  <header class="wrapper bg-soft-primary">
    <nav class="navbar navbar-expand-lg center-nav transparent navbar-light bg-white">
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <router-link to="/">
            <img src="../assets/img/logo.png" alt="Logo" />
          </router-link>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">Welkin Solutions</h3>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link hover">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">Home</span>
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/our-services" class="nav-link hover">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">Our Services</span>
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/our-projects" class="nav-link hover">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">Our Projects</span>
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about-us" class="nav-link hover">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">About Us</span>
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Testimonials" class="nav-link hover">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">Testimonials</span>
                  </div>
                </router-link>
              </li> 

            </ul>
            <!-- /.navbar-nav -->
            <div class="offcanvas-footer d-lg-none">
              <div>
                <router-link to="/contact-us" class="btn btn-sm btn-primary rounded">Contact Us</router-link>
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
              <router-link to="/contact-us" class="btn btn-sm btn-primary rounded">Contact Us</router-link>
            </li>
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn"><span></span></button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        
        <div >
          <h1></h1>
        </div>
        <!-- /.navbar-other -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>

<script>
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import Testimonials from '../views/Testimonials.vue';
import Projects from '../views/Projects.vue';
import { mapState } from 'vuex';

export default {
  name: 'Header',
  components: { Home, Services,  Projects, About, Testimonials, Contact },

};
</script>

<style scoped>
/* Add your styles here */
</style>
