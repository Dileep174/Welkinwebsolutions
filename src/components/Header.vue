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
              <li v-for="(menuItem, index) in menuItems" :key="index" class="nav-item">
                <router-link :to="menuItem.path" class="nav-link hover">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">{{ menuItem.title }}</span>
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
                  <a v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.href">
                    <i :class="socialLink.icon"></i>
                  </a>
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
// import { mapState } from 'vuex';

export default {
  name: 'Header',
data() {
    return {
      menuItems: [
        { title: 'Home', path: '/' },
        { title: 'Our Services', path: '/our-services' },
        { title: 'Our Projects', path: '/our-projects' },
        { title: 'About Us', path: '/about-us' },
        { title: 'Testimonials', path: '/testimonials' }
      ],
      socialLinks: [
        { href: '#', icon: 'uil uil-twitter' },
        { href: '#', icon: 'uil uil-facebook-f' },
        { href: '#', icon: 'uil uil-dribbble' },
        { href: '#', icon: 'uil uil-instagram' },
        { href: '#', icon: 'uil uil-youtube' }
      ]
    }
  },
  components: { Home, Services,  Projects, About, Testimonials, Contact },
};
</script>