<template>
    <slot name="services" v-bind="services">

    </slot>
</template>

<script>
import design from '../../assets/img/designabut.png'
export default {
    name: 'Info',
    data() {
        return {
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