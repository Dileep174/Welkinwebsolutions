<template>
    <slot name="home" v-bind="home">

    </slot>
    <slot name="services" v-bind="services">

    </slot>

    <slot name="projects" v-bind="projects">

    </slot>

    <slot name="about" v-bind="about"> </slot>

    <slot name="testimonial" v-bind="about"></slot>
</template>

<script>
import design from '../../assets/img/designabut.png'
// projects image
import proj from '../../assets/img/Project_about_bg.png'
// about
import about from '../../assets/img/abutusd.svg'
export default {
    name: 'Info',
    data() {
        return {
            home: {
                description: 'Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna erat Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna erat',
                buttonText: 'Start Your Project',
                buttonClass: 'btn btn-lg btn-grape rounded'
            },
            services: {
                missionTitle: 'OUR MISSION & GOAL',
                missionSubtitle: 'Realize Your Business Goals For Profit',
                missionDescription: 'Nunc venenalis Iorem sed risus trlstque sent per. Duls porta,  rutruni tempus, lectus risus imDerdiet tellus, sed faucibus sum ipsum ncn neque. Curubilu r eleirend, erut ullamcorper porta. eras turpis.',
                contactUsButtonText: 'Contact Us',
                missionImage: design
            },
            projects: {
                aboutImage: proj,
                aboutTitle: 'About',
                aboutText: 'Nunc venenalis Iorem sed risus trlstque sent per. Duls porta,  rutruni tempus, lectus risus imDerdiet tellus, sed faucibus sum ipsum ncn neque. Curubilu r eleirend, erut ullamcorper porta. eras turpis.',
                contactUsLink: '/contact-us',
                contactUsText: 'Contact Us'
            },
            about: {
                aboutImage: about,
                aboutSubtitle: 'Since 2011, Doing Website design and development',
                aboutTitle: 'About',
                aboutTitleSuffix: 'Us',
                aboutText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing',
                viewAllLink: '/testimonials',
                viewAllText: 'View All Client’s Feedback'
            }
        }
    }
}
</script>