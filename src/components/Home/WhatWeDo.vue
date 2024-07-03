<!-- WhatWeDo.vue -->
<template>
  <section class="wrapper bg-grey">
    <div class="container pt-3 pb-4 pb-md-4">
      <div class="row text-center" v-if="page">
        <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">{{ page.acf.grow_business.title }}</h2>
          <h3 class="display-4 mb-2" v-html="page.acf.grow_business.subtitle"></h3>
          <p class="mb-10">{{ page.acf.grow_business.description }}</p>
        </div>
      </div>
      <div class="row gx-md-8 gy-8 mb-15 mb-md-14 text-center">
        <div v-for="(service, index) in services" :key="index" class="col-md-6 col-lg-4">
          <div class="mybox">
            <img :src="service.icon" class="svg-inject icon-svg icon-svg-md solid-mono text-grape mb-5 myanimation" alt="" />
            <h1>{{ service.title }}</h1>
            <p class="mb-2">{{ service.description }}</p>
            <a :href="service.href" class="more hover">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhatWeDo',
  props: {
    page: Object
  },
  data() {
    return {
      services: []
    }
  },
  mounted() {
    // Fetch data from API or database
    this.services = [
      {
        title: 'Web Design',
        description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow',
        icon: '../assets/img/webdesign.svg',
        href: '#'
      },
      {
        title: 'Web Development',
        description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow',
        icon: '../assets/img/webdevelopment.svg',
        href: '#'
      },
      {
        title: 'Media Marketing',
        description: 'Twit are excet  Frond, rnatie boy grub it\'s tell gone to pot MI Mrs nut butts horse play blow',
        icon: '../assets/img/media_marketting.svg',
        href: '#'
      }
    ];
  }
}
</script>