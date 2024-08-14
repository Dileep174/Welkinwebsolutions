<template>
    <slot name="home" v-bind="home">

    </slot>
    <slot name="services" v-bind="services">

    </slot>
</template>

<script>
import design from '../../assets/img/designabut.png'
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
            }
        }
    }
}
</script>