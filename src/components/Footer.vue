<template>
  <footer class="bg-footer text-inverse">
    <div class="container py-6 py-md-6">
      <div class="row gy-3 gy-lg-0">
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <img class="mb-4" :src="logoUrl" alt="">

            <nav class="nav social social-white">
              <a v-for="(social, index) in socialLinks" :key="index" :href="social.href">
                <i :class="social.icon"></i>
              </a>
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Get in Touch</h4>
            <address class="pe-xl-15 pe-xxl-17">{{ address }}</address>
            <a :href="`mailto:${email}`">{{ email }}</a> <br>
            <a :href="`tel:${phone}`">{{ phone }}</a>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Navigation</h4>
            <ul class="list-unstyled  mb-0">
              <li v-for="(navItem, index) in navigation" :key="index">
                <a :href="navItem.href">{{ navItem.text }}</a>
              </li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-12 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Our Newsletter</h4>
            <p class="mb-5 text-white">{{ newsletterText }}</p>
            <div class="newsletter-wrapper">
              <form @submit.prevent="subscribeToNewsletter">
                <div class="mc-field-group input-group form-floating">
                  <input type="email" v-model="newsletterEmail" class="required email form-control"
                    placeholder="Email Address" id="mce-EMAIL2">
                  <label for="mce-EMAIL2">Email Address</label>
                  <input type="submit" value="Join" class="btn btn-primary ">
                </div>
              </form>
            </div>
            <!-- /.newsletter-wrapper -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->

        <hr class="mt-6 mt-md-5 mb-3" style="color:#fff;">
        <div class="d-md-flex align-items-center justify-content-center">
          <p class="mb-0 mb-lg-0 text-white">{{ copyrightText }}</p>

          <!-- /.social -->
        </div>

      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </footer>

  <div class="progress-wrap">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</template>

<script>
import logo from '../assets/img/logo.png'
export default {
  name: 'Footer',
  data() {
    return {
      logoUrl: logo,
      socialLinks: [
        { href: '#', icon: 'uil uil-twitter' },
        { href: '#', icon: 'uil uil-facebook-f' },
        { href: '#', icon: 'uil uil-dribbble' },
        { href: '#', icon: 'uil uil-instagram' },
        { href: '#', icon: 'uil uil-youtube' }
      ],
      address: 'Moonshine St. 14/05 Light City, London, United Kingdom',
      email: 'info@email.com',
      phone: '00 (123) 456 78 90',
      navigation: [
        { text: 'Home', href: '#' },
        { text: 'Our Services', href: '#' },
        { text: 'Our Projects', href: '#' },
        { text: 'About Us', href: '#' },
        { text: 'Testimonials', href: '#' },
        { text: 'Contact Us', href: '#' }
      ],
      newsletterText: 'Subscribe to our newsletter to get our news & deals delivered to you.',
      newsletterEmail: '',
      copyrightText: '© Copyright © 2022 welkin solutions All Rights Reserved.Terms of Use | Privacy Policy | Disclaimer'
    };
  },
  methods: {
    subscribeToNewsletter() {
      // Add your newsletter subscription logic here
      console.log('Subscribed to newsletter with email:', this.newsletterEmail);
    }
  }
};
</script>