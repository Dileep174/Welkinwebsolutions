<template>
    <section class="Background3">
        <div class="container">
            <div class="row p-50">
                <div class="col-md-12 col-sm-12 col-lg-6">
                    <div class="contactbox p-5">
                        <h2 class="text-uppercase text-primary line-high">{{ mission.missionTitle }}</h2>
                        <form class="contact-form needs-validation" @submit.prevent="sendForm">
                            <div class="messages"></div>
                            <div class="row gx-4">
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input type="text" v-model="name" class="form-control" placeholder="Jane"
                                            required>
                                        <label for="form_name">First Name *</label>
                                        <div class="valid-feedback"> Looks good! </div>
                                        <div class="invalid-feedback"> Please enter your first name. </div>
                                    </div>
                                </div>
                                <!-- /column -->
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input id="form_lastname" type="text" v-model="surname" class="form-control"
                                            placeholder="Doe" required>
                                        <label for="form_lastname">Last Name *</label>
                                        <div class="valid-feedback"> Looks good! </div>
                                        <div class="invalid-feedback"> Please enter your last name. </div>
                                    </div>
                                </div>
                                <!-- /column -->
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input id="form_email" type="email" v-model="email" class="form-control"
                                            placeholder="jane.doe@example.com" required>
                                        <label for="form_email">Email *</label>
                                        <div class="valid-feedback"> Looks good! </div>
                                        <div class="invalid-feedback"> Please provide a valid email address. </div>
                                    </div>
                                </div>
                                <!-- /column -->
                                <div class="col-md-6">
                                    <div class="form-select-wrapper mb-4">
                                        <select class="form-select" id="form-select" v-model="depart" required>
                                            <option selected disabled value="">Select a department</option>
                                            <option value="Sales">Sales</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Customer Support">Customer Support</option>
                                        </select>
                                        <div class="valid-feedback"> Looks good! </div>
                                        <div class="invalid-feedback"> Please select a department. </div>
                                    </div>
                                </div>
                                <!-- /column -->
                                <div class="col-12">
                                    <div class="form-floating mb-4">
                                        <textarea id="form_message" v-model="message" class="form-control"
                                            placeholder="Your message" style="height: 150px" required></textarea>
                                        <label for="form_message">Message *</label>
                                        <div class="valid-feedback"> Looks good! </div>
                                        <div class="invalid-feedback"> Please enter your messsage. </div>
                                    </div>
                                </div>
                                <!-- /column -->
                                <div class="col-12">
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" type="checkbox" v-model="terms"
                                            id="invalidCheck" required>
                                        <label class="form-check-label" for="invalidCheck"> I agree to <a href="#"
                                                class="hover">terms and policy</a>. </label>
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
                <div class="col-md-12 col-sm-12 col-lg-6">
                    <h3 class="display-4 mb-2 text-left" style="text-align:left;"> {{ mission.coreValuesTitle }} </h3>
                    <p class="mb-2" style="text-align:left;"> {{ mission.coreValuesDescription }} </p>
                    <div class="businessimg mt-7 mb-7"> <img :src="mission.coreValuesImage" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import video from '../../assets/img/video.png'
// import { mapActions } from 'vuex';

export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            depart: '',
            message: '',
            terms: false,
            mission: {
                missionTitle: 'OUR MISSION & GOAL',
                coreValuesTitle: 'Our Core Values of Business',
                coreValuesDescription: 'Nunc venenalis Iorem sed risus trlstque sent per. Duls porta, rutruni tempus, lectus risus imDerdiet tellus, sed faucibus sum ipsum ncn neque. Curubilu r eleirend, erut ullamcorper porta. eras turpis.',
                coreValuesImage: video,
            }
        }
    },
    methods: {
        sendForm() {
            const formData = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                depart: this.depart,
                message: this.message,
                terms: this.terms
            };
            this.$store.dispatch('email/sendEmail', formData);
        }

    }
}
</script>