<template>
<section class="wrapper projectcount">
    <div class="container py-md-5 py-sm-10">
      <div class="row mb-2 mt-2">
        <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">
          <h1 class="projectc">{{ projectsDone }}</h1>
          <p class="projectdone"> Projects Done</p>
        </div>
  
        <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">
          <h1 class="projectc">{{ yearsExperience }}</h1>
          <p class="projectdone"> Years Experience</p>
        </div>
  
        <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">
          <h1 class="projectc">{{ happyClients }}</h1>
          <p class="projectdone"> Happy Clients</p>
        </div>
  
        <div class="col-md-3 col-sm-6 mx-auto text-center pt-3">
          <h1 class="projectc">{{ recognition }}</h1>
          <p class="projectdone"> Recognition </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projectsDone: 0,
      yearsExperience: 0,
      happyClients: 0,
      recognition: 0
    }
  },
  mounted() {
    // Initialize the counters with the initial values
    this.projectsDone = 0;
    this.yearsExperience = 0;
    this.happyClients = 0;
    this.recognition = 0;

    // Set the target values for each counter
    const targetValues = {
      projectsDone: 3511,
      yearsExperience: 11,
      happyClients: 541,
      recognition: 1123
    };

    // Create a timer to update the counters every second
    setInterval(() => {
      // Update the counters with new values
      if (this.projectsDone < targetValues.projectsDone) {
        this.projectsDone += 1;
      }
      if (this.yearsExperience < targetValues.yearsExperience) {
        this.yearsExperience += 1;
      }
      if (this.happyClients < targetValues.happyClients) {
        this.happyClients += 1;
      }
      if (this.recognition < targetValues.recognition) {
        this.recognition += 1;
      }
    });
  }
}
</script>