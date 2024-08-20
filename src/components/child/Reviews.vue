<template>
    <section class="wrapper bg-soft-primary">
      <div class="container py-44 py-md-4">
        <div class="row mb-2 mt-2">
          <div class="col-lg-12 mx-auto text-center mt-5">
            <h3 class="display-4 mb-2">Text<span class="text-primary"> Testimonials </span> </h3>
          </div> <!-- /column -->
        </div> <!-- /.row -->
        <div>
          <div class="row mt-2">
            <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
              <div class="bg-rating text-center">
                <div class="orangestrip"> </div>
                <div class="text-center "> <img :src="testimonial.image" alt="" class="img-fluid profileimg"> </div>
                <div class="boxcontent">
                  <div class="name"> <b>{{ testimonial.name }} </b> </div>
                  <div class="position"> {{ testimonial.position }} </div>
                  <div class="rating mt-2"> <img src="../../assets/img/rating.png" alt=""> </div>
                  <p class="mt-5">{{ testimonial.testimonial }}</p>
                </div>
              </div>
            </div>
          </div> <!-- row -->
        </div>
      </div>
      
      <figure><img src="../../assets/img/whiteculy.svg" alt=""></figure>
       <!-- /.container -->
    </section>
  </template>
  
  <script>
  import profile from '../../assets/img/profile2.png'
  export default {
    name: 'Reviews',
    data() {
      return {
        testimonials: [
          {
            image: profile,
            name: 'John Doe',
            position: 'Manager',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'Jane Doe',
            position: 'Developer',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'John Doe',
            position: 'Manager',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'Jane Doe',
            position: 'Developer',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'John Doe',
            position: 'Manager',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'Jane Doe',
            position: 'Developer',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'John Doe',
            position: 'Manager',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'Jane Doe',
            position: 'Developer',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          {
            image: profile,
            name: 'Jane Doe',
            position: 'Developer',
            testimonial: '“Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum. Nam nec tellus a odio tincidunt This lorem is Photoshop’s version of Lorem Ipsum.”'
          },
          // Add more testimonials here
        ]
      };
    }
  };
  </script>