<template>
  <slot name="home" v-bind="tech">
  </slot>
</template>

<script>
import wp from '../../assets/img/wp.png'
import shpyfy from '../../assets/img/shpyfy.png'
import php1 from '../../assets/img/php1.png'
import larave from '../../assets/img/larave.png'
import code from '../../assets/img/codeigniter.png'
import click from '../../assets/img/clickfunnel 1.png'
import white from '../../assets/img/whiteculy.svg'

export default {
  name: 'Technologies',
  data() {
    return {
      tech: {
        technologiesTitle: 'Our Technologies',
        technologies: [
          {
            image: wp
          },
          {
            image: shpyfy
          },
          {
            image: php1
          },
          {
            image: larave
          },
          {
            image: code
          },
          {
            image: click
          },
          {
            image: wp
          },
          {
            image: shpyfy
          },
          {
            image: php1
          },
          {
            image: larave
          },
          {
            image: code
          },
          {
            image: click
          },
        ],
        culyImage: white
      }
    }
  },
  mounted() {
    // TyperSetup();
    // theme.init();
    theme;
  },
}
</script>