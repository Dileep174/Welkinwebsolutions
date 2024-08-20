<template>
    <Hero>
        <template #contact="{ title, headline, highlight, description, ctaLink, ctaText, imageUrl, imageAlt, backgroundImage,
            animationCues, animationGroup, animationDelay, animationStyle, highlightStyle }">
            <section class="wrapper bg-soft-primary">
                <div class="container pt-5 pt-lg-6 pt-xl-6 pt-xxl-5 pb-lg-5 pb-xl-5 pb-xxl-0">
                    <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
                        <div class="col-lg-6" :data-cues="animationCues.title" :data-group="animationGroup"
                            :data-delay="animationDelay">
                            <div class="mb-4 text-primary">{{ title }}</div>
                            <h1 class="display-1 mb-5 mx-md-10 mx-lg-0" :data-cue="animationCues.title"
                                :data-group="animationGroup" :data-delay="animationDelay" :style="animationStyle">{{
            headline }} <span :style="highlightStyle">{{ highlight }}</span></h1>
                            <p class="lead fs-24 lh-sm mb-7 pe-xxl-15">{{ description }}</p>
                            <div class="d-inline-flex me-2"><a :href="ctaLink" class="btn btn-lg btn-grape rounded">{{
            ctaText }}</a></div>
                        </div>
                        <!--/column -->
                        <div class="col-10 col-md-7 col-lg-6" :data-cue="animationCues.image" :data-show="true"
                            :style="animationStyle">
                            <img class="img-fluid" :src="imageUrl" :alt="imageAlt" />
                        </div>
                        <!--/column -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container -->
                <figure><img :src="backgroundImage" alt="" /></figure>
            </section>
        </template>
    </Hero>

    <section class="wrapper p-50">
        <div class="container">
            <div class="row ">
                <div class="col-md-11 offset-md-1 col-xxl-11 offset-xxl-1">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="contactform">

                                <form class="contact-form needs-validation" @submit.prevent="sendForm">
                                    <div class="messages"></div>


                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-floating mb-4">
                                                <input id="form_name" type="text" v-model="formData.name" class="form-control"
                                                    placeholder="Jane" required="">
                                                <label for="form_name">Full Name *</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please enter your first name. </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-floating mb-4">
                                                <input id="form_email" type="email" v-model="formData.email" class="form-control"
                                                    placeholder="jane.doe@example.com" required="">
                                                <label for="form_email">Email *</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please provide a valid email address.
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /column -->


                                        <!-- /column -->
                                        <div class="col-md-12">
                                            <div class="form-floating mb-4">
                                                <input id="form_lastname" type="number" v-model="formData.contact"
                                                    class="form-control" placeholder="Doe" required="">
                                                <label for="form_lastname">Contact Number</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please enter your last name. </div>
                                            </div>
                                        </div>

                                        <!-- /column -->


                                        <!-- /column -->
                                        <div class="col-md-12">
                                            <div class="form-floating mb-4">
                                                <input id="form_name" type="text" v-model="formData.country" class="form-control"
                                                    placeholder="Jane" required="">
                                                <label for="form_name">Country</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please enter your first name. </div>
                                            </div>
                                        </div>
                                        <!-- /column -->


                                        <div class="col-md-12">
                                            <div class="form-select-wrapper mb-4">
                                                <select class="form-select" id="form-select" v-model="formData.services"
                                                    required="">
                                                    <option selected="" disabled="" value="">Select Services</option>
                                                    <option value="Sales">Sales</option>
                                                    <option value="Marketing">Website Design</option>
                                                    <option value="Customer Support">Wordpress Development</option>
                                                </select>
                                                <div class="valid-feedback">Custome Webiste Development </div>
                                                <div class="invalid-feedback"> Geaphic Design </div>
                                            </div>
                                        </div>
                                        <!-- /column -->

                                        <!-- /column -->
                                        <div class="col-md-12">
                                            <div class="form-select-wrapper mb-4">
                                                <select class="form-select" id="form-select" v-model="formData.department"
                                                    required="">
                                                    <option selected="" disabled="" value="">Select a department
                                                    </option>
                                                    <option value="Sales">Sales</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="Customer Support">Customer Support</option>
                                                    <option value="Customer Support">Website Development Team</option>
                                                </select>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please select a department. </div>
                                            </div>
                                        </div>
                                        <!-- /column -->
                                        <div class="col-12">
                                            <div class="form-floating mb-4">
                                                <textarea id="form_message" v-model="formData.message" class="form-control"
                                                    placeholder="Your message" style="height: 150px"
                                                    required=""></textarea>
                                                <label for="form_message">Message *</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please enter your messsage. </div>
                                            </div>
                                        </div>
                                        <!-- /column -->
                                        <div class="col-12">
                                            <div class="form-check mb-4">
                                                <input class="form-check-input" type="checkbox" v-model="formData.terms" value=""
                                                    id="invalidCheck" required="">
                                                <label class="form-check-label" for="invalidCheck"> I agree to <a
                                                        href="#" class="hover">terms and policy</a>. </label>
                                                <div class="invalid-feedback"> You must agree before submitting. </div>
                                            </div>
                                        </div>
                                        <!-- /column -->
                                        <div class="col-12">
                                            <input type="submit" class="btn btn-primary rounded-pill btn-send mb-3"
                                                value="Send message">
                                            <p class="text-muted"><strong>*</strong> These fields are required.</p>
                                        </div>
                                        <!-- /column -->
                                    </div>
                                    <!-- /.row -->
                                </form>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <h3 class="display-3">Feel Free To <span class="text-primary"> Contact Us </span></h3>

                            <ul class="feeldfree">
                                <li v-for="(item, index) in reasons" :key="index">{{ item }}</li>
                            </ul>

                            <div class="mt-8">
                                <div class="d-flex flex-row">
                                    <div>
                                        <div class="icon text-primary fs-28 me-4 mt-n1"> <i
                                                class="uil uil-location-pin-alt"></i> </div>
                                    </div>
                                    <div class="align-self-start justify-content-start">
                                        <h5 class="mb-1">Address</h5>
                                        <address>{{ address }}</address>
                                    </div>
                                </div>
                                <!--/div -->
                                <div class="d-flex flex-row">
                                    <div>
                                        <div class="icon text-primary fs-28 me-4 mt-n1"> <i
                                                class="uil uil-phone-volume"></i> </div>
                                    </div>
                                    <div>
                                        <h5 class="mb-1">Phone</h5>
                                        <p>{{ phone }}</p>
                                    </div>
                                </div>
                                <!--/div -->
                                <div class="d-flex flex-row">
                                    <div>
                                        <div class="icon text-primary fs-28 me-4 mt-n1"> <i
                                                class="uil uil-envelope"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 class="mb-1">E-mail</h5>
                                        <p class="mb-0"><a :href="`mailto:${email}`" class="link-body">{{ email }}</a>
                                        </p>
                                        <p class="mb-0"><a :href="`mailto:${helpEmail}`" class="link-body">{{ helpEmail
                                                }}</a></p>
                                    </div>
                                </div>
                                <!--/div -->
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /column -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>
</template>

<script>
import Hero from '../components/child/Hero.vue'
export default {
    name: 'Contact',
    components: {
        Hero
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                contact: '',
                country: '',
                services: '',
                department: '',
                message: '',
                terms: false
            },
            reasons: [
                'You have an idea to create a Website.',
                'You want to get your website developed with latest features.',
                'You are looking for a price proposal for your project.',
                'You have any query related to Mobile/Web design and development.',
                'You want a website/app that increase your business ROI.',
                'You are impressed by our portfolio and want our services.'
            ],
            address: 'Moonshine St. 14/05 Light City, London, United Kingdom',
            phone: '00 (123) 456 78 90<br>00 (987) 654 32 10',
            email: 'sandbox@email.com',
            helpEmail: 'help@sandbox.com'
        };
    },
    methods: {
        sendForm() {
            const formData = {
                name: this.formData.name,
                email: this.formData.email,
                contact: this.formData.contact,
                country: this.formData.country,
                services: this.formData.services,
                department: this.formData.department,
                message: this.formData.message,
                terms: this.formData.terms

            };
            this.$store.dispatch('projectForm/sendEmail', formData);
        }
    }
}
</script>