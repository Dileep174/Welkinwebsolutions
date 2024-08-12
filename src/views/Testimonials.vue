<template>
    <div class="content-wrapper">
        <Hero>
            <template #testimonial="{ subTitle, title, typerText, description, buttonText, testimonial, cloudsImage }">
                <section class="wrapper bg-soft-primary">
                    <div class="container">
                        <div class="row align-items-center text-center text-lg-start">
                            <div class="col-lg-6 p-40" data-cues="slideInDown" data-group="page-title" data-delay="900">
                                <div class="mb-4 text-primary">{{ subTitle }}</div>
                                <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown"
                                    data-group="page-title" data-delay="600" data-show="true"
                                    style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
                                    {{ title }} <span class="typer text-primary text-nowrap" data-delay="100"
                                        data-words="Speak" style="color: black;">{{ typerText }}</span><span
                                        class="cursor text-primary" data-owner="typer"
                                        style="transition: all 0.1s ease 0s; opacity: 0;">|</span>
                                </h1>
                                <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">{{ description }}</p>
                                <div class="d-inline-flex me-2">
                                    <router-link to="/our-projects" class="btn btn-lg btn-grape rounded">{{ buttonText
                                        }}</router-link>
                                </div>
                            </div>
                            <!--/column -->
                            <div class="col-12 pt-4 col-md-7 col-lg-6 text-center" data-cue="zoomIn" data-show="true"
                                style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                                <img class="img-fluid" :src="testimonial" data-cue="fadeIn" data-delay="300" alt="" />
                            </div>
                            <!--/column -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container -->
                    <figure><img :src="cloudsImage" alt=""></figure>
                </section>
            </template>
        </Hero>
        <Cards>
            <template #testimonial="{ title, subTitle, image1, image2 }">
                <section class="wrapper bg-grey">
                    <div class="container pt-3 pb-4 pb-md-4">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <h3 class="display-4 mb-2">{{ title }} <span class="text-primary">{{ subTitle }}</span>
                                </h3>
                                <hr>
                            </div> <!-- /column -->
                        </div> <!-- /.row -->
                        <div class="row">
                            <div class="col-md-2"> </div>
                            <div class="col-md-4"> <img :src="image1" class="img-fluid"> </div>
                            <!--/column -->
                            <div class="col-md-4"> <img :src="image2" class="img-fluid"> </div>
                            <div class="col-md-2"> </div>
                            <!--/column -->
                        </div>
                        <!--/.row -->
                        <div class="row mt-5 mb-14">
                            <div class="col-md-2"> </div>
                            <div class="col-md-4"> <img :src="image1" class="img-fluid"> </div>
                            <!--/column -->
                            <div class="col-md-4"> <img :src="image2" class="img-fluid"> </div>
                            <div class="col-md-2"> </div>
                            <!--/column -->
                        </div>
                        <!--/.row -->
                    </div> <!-- /.container -->
                </section> <!-- /section -->
            </template>
        </Cards>
    </div>
</template>

<script>
import Hero from '../components/child/Hero.vue'
import Cards from '../components/child/Cards.vue'
export default {
    name: 'Testimonials',
    components: {
        Hero, Cards
    }
}
</script>