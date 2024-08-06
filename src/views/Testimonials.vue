<template>
    <Hero>
        <template #testimonial="{ subTitle, title, typerText, description, buttonText }">
            <section class="wrapper bg-soft-primary">
                <div class="container">
                    <div class="row align-items-center text-center text-lg-start">
                        <div class="col-lg-6 p-40" data-cues="slideInDown" data-group="page-title" data-delay="900">
                            <div class="mb-4 text-primary">{{ subTitle }}</div>
                            <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title"
                                data-delay="600" data-show="true"
                                style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
                                {{ title }} <span class="typer text-primary text-nowrap" data-delay="100"
                                    data-words="Speak" style="color: black;">{{ typerText }}</span><span
                                    class="cursor text-primary" data-owner="typer"
                                    style="transition: all 0.1s ease 0s; opacity: 0;">|</span>
                            </h1>
                            <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">{{ description }}</p>
                            <div class="d-inline-flex me-2">
                                <router-link to="/our-projects" class="btn btn-lg btn-grape rounded">{{ buttonText }}</router-link>
                            </div>
                        </div>
                        <!--/column -->
                        <div class="col-12 pt-4 col-md-7 col-lg-6 text-center" data-cue="zoomIn" data-show="true"
                            style="animation-name: zoomIn; animation-duration: 1700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                            <img class="img-fluid" :src="image" data-cue="fadeIn" data-delay="300" alt="" />
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
</template>

<script>
import Hero from '../components/Home/Hero.vue'
export default {
    name: 'Testimonials',
    components: {
        Hero
    }
}
</script>