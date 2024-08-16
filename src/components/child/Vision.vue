<template>
  <section class="wrapper Background1">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-12">
          <div class="vision" :data-cues="visionCues" :data-group="pageTitleGroup" :data-delay="visionDelay">
            <h2>{{ visionTitle }}</h2>
            <p v-html="visionText" style="margin: 0px; padding:0px"></p>
            <a :href="readMoreLink" class="redmorebtn">{{ readMoreText }}</a>
          </div>
        </div>
        <div class="col-10 col-md-7 col-lg-6 m-0 p-0">
          <img class="img-fluid" :src="ourVisionImage" :data-cue="fadeIn" :data-delay="300" alt="" />
        </div>
        <div class="col-lg-6 align-self-center" :data-cues="missionCues" :data-group="pageTitleGroup" :data-delay="missionDelay">
          <div class="mission">
            <h2>{{ missionTitle }}</h2>
            <p v-html="missionText" style="margin: 0px; padding:0px"></p>
            <a :href="readMoreLink" class="redmorebtn">{{ readMoreText }}</a>
          </div>
          <div class="vallues mt-13">
            <h2>{{ valuesTitle }}</h2>
            <p v-html="valuesText" style="margin: 0px; padding:0px"></p>
            <a :href="readMoreLink" class="redmorebtn">{{ readMoreText }}</a>
          </div>
        </div>
      </div>
    </div>
    <figure><img :src="cloudsImage" alt=""></figure>
  </section>
</template>

<script>
import Vision from '../../assets/img/our_vision.png'
import clouds from '../../assets/img/clouds.png'
export default {
  name: 'Vision',
  data() {
    return {
      visionCues: 'slideInDown',
      pageTitleGroup: 'page-title',
      visionDelay: 900,
      visionTitle: 'Our Vision',
      visionText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,',
      ourVisionImage: Vision,
      missionCues: 'slideInDown',
      missionDelay: 900,
      missionTitle: 'Our Vision',
      missionText: 'Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna erat Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna',
      valuesTitle: 'OUR VALUES',
      valuesText: 'Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna erat Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna',
      readMoreLink: '#',
      readMoreText: 'Read More',
      cloudsImage: clouds
    }
  }
}
</script>