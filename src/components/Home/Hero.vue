<template>
  <slot name="home" v-bind="hero">
    <img src="../../assets/img/myslider.png" alt="">
  </slot>
  <slot name="services" v-bind="services">
  </slot>
  <slot name="projects" v-bind="projects">
  </slot>
  <slot name="about" v-bind="about">

  </slot>
  <slot name="testimonial" v-bind="testimonial">

  </slot>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      hero: {
        subTitle: 'AWARD WINNING COMPANY',
        title: 'We Are The Best in',
        description: 'You need to get positive results when you spend hard <br class="d-none d-md-block d-lg-none" /> earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        image: '../../assets/img/myslider.png',
        cloudsImage: '../../assets/img/clouds.png'
      },
      services: {
        subTitle: 'Normal Rate, Best Service',
        title: 'We Are full',
        typerText: 'easy',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        image: 'img/about.png',
        cloudsImage: 'img/clouds.png'
      },
      projects: {
        projectCount: '2514 Total Projects completed',
        title: 'Impressive portfolios Work',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        image: 'img/project_header.png',
        cloudsImage: 'img/clouds.png'
      },
      about: {
        subTitle: 'Design, Development & Digital Marketing',
        title: 'Think Big. We make IT,',
        typerText: 'easy',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        image: 'img/about-header.png',
        cloudsImage: 'img/clouds.png'
      },
      testimonial: {
        subTitle: 'Repeat business is the best testimonial you’ll ever get.',
        title: 'Our Clients',
        typerText: 'easy',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        image: 'img/testimonial_banner.png',
        cloudsImage: 'img/clouds.png'
      }

    }
  },
  mounted() {
    theme.init();
    TyperSetup();
  },
};
</script>
