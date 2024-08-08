<template>
  <slot name="home" v-bind="home"></slot>
  <slot name="testimonial" v-bind="testimonial">
  </slot>
  <slot name="services" v-bind="services">

  </slot>
  <slot name="about" v-bind="about">

  </slot>
</template>

<script>
// home
import feedback1 from '../../assets/img/feedback4.png';
import feedback2 from '../../assets/img/feedback3.png';
import webdesign from '../../assets/img/webdesign.svg';
import webdev from '../../assets/img/webdevelopment.svg';
import media from '../../assets/img/media_marketting.svg';
// services
import dot from '../../assets/img/mydot.png';
import circle from '../../assets/img/circle.png';
import logo from '../../assets/img/orangelogo.svg';
// about_services
import design from '../../assets/img/web-design.svg';
import dev from '../../assets/img/web_development.svg';
import app from '../../assets/img/app_development.svg';

export default {
  name: 'Cards',
  data() {
    return {
      home: {
        subTitle: 'What We Do?',
        title: 'Grow Your Business',
        companyName: 'Welkin Solutions',
        description: 'tempus, lectus risus In perdiel tellus, sed faucibus ipsum ipsurn nun neque.',
        services: [
          {
            icon: webdesign,
            title: 'Web Design',
            description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow'
          },
          {
            icon: webdev,
            title: 'Web Development',
            description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow'
          },
          {
            icon: media,
            title: 'Media Marketing',
            description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow'
          }
        ]
      },
      services: {
        subTitle: 'Technology solutions',
        title: 'We Provide',
        companyName: 'IT & Business Solutions',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting",
        dotImage: dot,
        circleImage: circle,
        logoImage: logo,
        service1: [
          {
            title: 'UI/UX design Services',
            number: '01',
            description: 'Nulla vitae elit libero pharetra augue dapibus.'
          },
          {
            title: 'Web Development',
            number: '02',
            description: 'Vivamus sagittis lacus vel augue laoreet.'
          },
          {
            title: 'SEO Marketting',
            number: '03',
            description: 'Cras mattis consectetur purus sit amet.'
          },
        ],
        service2: [
          {
            title: 'Mobile Application Development',
            number: '01',
            description: 'Nulla vitae elit libero pharetra augue dapibus.'
          },
          {
            title: 'CMS Development',
            number: '02',
            description: 'Vivamus sagittis lacus vel augue laoreet.'
          },
          {
            title: 'Custom Software Development',
            number: '03',
            description: 'Cras mattis consectetur purus sit amet.'
          }
        ]
      },
      testimonial: {
        title: 'Videos',
        subTitle: 'Testimonials',
        image1: feedback1,
        image2: feedback2
      },
      about: {
        title: 'Our<span class="text-primary"> Services</span>',
        about_services: [
        {
          className: 'webdesign',
          icon: design,
          title: 'Web Design',
          description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow',
        },
        {
          className: 'webdevelopment',
          icon: dev,
          title: 'Web Development',
          description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow',
        },
        {
          className: 'appdevelopment',
          icon: app,
          title: 'App Development',
          description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow',
        }
      ]
      }
    }
  }
}
</script>

<style scoped>
.icon-svg.icon-svg-md {
  width: 2rem;
  height: 2rem;
}

img.svg-inject {
  visibility: visible;
}
</style>