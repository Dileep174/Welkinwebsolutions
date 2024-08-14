<template>
  <slot name="home" v-bind="home"></slot>
  <slot name="projects" v-bind="pro"></slot>
</template>

<script>
// home
import pp10 from '../../assets/img/pp10.jpg'
import pp11 from '../../assets/img/pp11.jpg'
import pp12 from '../../assets/img/pp12.jpg'
import pp13 from '../../assets/img/pp13.jpg'
import pp14 from '../../assets/img/pp14.jpg'
import pp15 from '../../assets/img/pp15.jpg'
import pp16 from '../../assets/img/pp16.jpg'

// project
import p1 from '../../assets/img/portfolio/p1.jpg'
import p2 from '../../assets/img/portfolio/p2.jpg'
import p3 from '../../assets/img/portfolio/p3.jpg'
import p4 from '../../assets/img/portfolio/p4.jpg'
import p5 from '../../assets/img/portfolio/p5.jpg'
import p6 from '../../assets/img/portfolio/p6.jpg'
import p7 from '../../assets/img/portfolio/p7.jpg'
import p8 from '../../assets/img/portfolio/p8.jpg'
import p9 from '../../assets/img/portfolio/p9.jpg'

export default {
  name: 'Portfolios',
  data(){
    return {
      home: {
        images: [
        { src: pp10 },
        { src: pp11 },
        { src: pp12 },
        { src: pp13 },
        { src: pp14 },
        { src: pp15 },
        { src: pp16 }
      ],
      swiperMargin: 30,
      swiperItemsXxl: 3,
      swiperItemsMd: 2,
      swiperItemsXs: 1,
    
      },
      pro: {
        title: 'Portfolios',
        description: "tempus, lectus risus In' perdiel tellus, sed faucibus ipsum ipsurn nun neque.",
        projects: [
        {
          image: p1,
          link: './single-project.html',
          category: 'product',
          categoryColor: 'text-purple',
          title: 'Cras Fermentum Sem'
        },
        {
          image: p2,
          link: './single-project2.html',
          category: 'workshop',
          categoryColor: 'text-leaf',
          title: 'Mollis Ipsum Mattis'
        },
        {
          image: p3,
          link: './single-project3.html',
          category: 'still-life',
          categoryColor: 'text-violet',
          title: 'Ipsum Ultricies Cursus'
        },
        // 2
        {
          image: p4,
          link: './single-project.html',
          category: 'product',
          categoryColor: 'text-purple',
          title: 'Cras Fermentum Sem'
        },
        {
          image: p5,
          link: './single-project2.html',
          category: 'workshop',
          categoryColor: 'text-leaf',
          title: 'Mollis Ipsum Mattis'
        },
        {
          image: p6,
          link: './single-project3.html',
          category: 'still-life',
          categoryColor: 'text-violet',
          title: 'Ipsum Ultricies Cursus'
        },
        // 3
        {
          image: p7,
          link: './single-project.html',
          category: 'product',
          categoryColor: 'text-purple',
          title: 'Cras Fermentum Sem'
        },
        {
          image: p8,
          link: './single-project2.html',
          category: 'concept',
          categoryColor: 'text-leaf',
          title: 'Mollis Ipsum Mattis'
        },
        {
          image: p9,
          link: './single-project3.html',
          category: 'concept',
          categoryColor: 'text-violet',
          title: 'Ipsum Ultricies Cursus'
        },
      ]
      }
    }
  }
}
</script>