<template>
  <slot name="home" v-bind="hero">
    <!-- <img :src="cloudsImages" alt=""> -->
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
import mySlider from "../../assets/img/myslider.png";
import cloudsImage from "../../assets/img/clouds.png";
import services from "../../assets/img/about.png";
import projects from "../../assets/img/project_header.png";
import about from "../../assets/img/about.png";
import testimonial from "../../assets/img/testimonial_banner.png";

export default {
  name: 'Hero',
  data() {
    return {
      hero: {
        subTitle: 'AWARD WINNING COMPANY',
        title: 'We Are The Best in',
        description: 'You need to get positive results when you spend hard <br class="d-none d-md-block d-lg-none" /> earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        mySlider: mySlider,
        cloudsImage: cloudsImage
      },
      services: {
        subTitle: 'Normal Rate, Best Service',
        title: 'We Are full',
        typerText: 'easy',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        services: services,
        cloudsImage: cloudsImage
      },
      projects: {
        projectCount: '2514 Total Projects completed',
        title: 'Impressive portfolios Work',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        projects: projects,
        cloudsImage: cloudsImage
      },
      about: {
        subTitle: 'Design, Development & Digital Marketing',
        title: 'Think Big. We make IT,',
        typerText: 'easy',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        about: about,
        cloudsImage: cloudsImage
      },
      testimonial: {
        subTitle: 'Repeat business is the best testimonial you’ll ever get.',
        title: 'Our Clients',
        typerText: 'easy',
        description: 'You need to get positive results when you spend hard earned revenue and time on any marketing effort. Great returns on marketing and promotions.',
        buttonText: 'Start Your Project',
        testimonial: testimonial,
        cloudsImage: cloudsImage
      }

    }
  },
  mounted() {
    theme.init();
    TyperSetup();
  },
};
</script>
