<template>
    <form class="contact-form needs-validation" @submit.prevent="sendForm">
        <div class="messages"></div>
        <div class="row gx-4">
            <div class="col-md-6">
                <div class="form-floating mb-4">
                    <input id="form_name" type="text" v-model="formData.name" class="form-control" placeholder="Jane"
                        required>
                    <label for="form_name">Full Name *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your first name. </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-4">
                    <input id="form_email" type="email" v-model="formData.email" class="form-control"
                        placeholder="jane.doe@example.com" required>
                    <label for="form_email">Email *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please provide a valid email address. </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-4">
                    <input id="form_lastname" type="number" v-model="formData.contact" class="form-control"
                        placeholder="Doe" required>
                    <label for="form_lastname">Contact Number</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your last name. </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-4">
                    <input id="form_country" type="text" v-model="formData.country" class="form-control"
                        placeholder="Jane" required>
                    <label for="form_country">Country</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your country. </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-select-wrapper mb-4">
                    <select class="form-select" id="form-select" v-model="formData.services" required>
                        <option selected disabled value="">Select Services</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Website Design</option>
                        <option value="Customer Support">Wordpress Development</option>
                    </select>
                    <div class="valid-feedback">Custome Webiste Development </div>
                    <div class="invalid-feedback"> Geaphic Design </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-select-wrapper mb-4">
                    <select class="form-select" id="form-select" v-model="formData.department" required>
                        <option selected disabled value="">Select a department</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Customer Support">Website Development Team</option>
                    </select>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please select a department. </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating mb-4">
                    <textarea id="form_message" v-model="formData.message" class="form-control"
                        placeholder="Your message" style="height: 150px" required></textarea>
                    <label for="form_message">Message *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your message. </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" v-model="formData.terms" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck"> I agree to <a href="#" class="hover">terms
                            and policy</a>. </label>
                    <div class="invalid-feedback"> You must agree before submitting. </div>
                </div>
            </div>
            <div class="col-12">
                <input type="submit" class="btn btn-primary rounded-pill btn-send mb-3" value="Send message">
                <p class="text-muted"><strong>*</strong> These fields are required.</p>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'projectForm',
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
        }
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