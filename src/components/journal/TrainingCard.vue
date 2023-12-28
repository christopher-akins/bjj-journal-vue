<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="date-wrapper">{{ trainingEvent.trainingDate }}</div>
        <p>{{ trainingEvent.trainingType }}</p>
        <h3>{{ trainingEvent.partnerName }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    trainingEvent: {
      type: Object,
      required: true,
    }

    // trainingDate: {
    //   type: [String, Date],
    //   default: new Date(),
    // },

    // trainingType: {
    //   type: String,
    //   default: 'Gi'
    // },

    // partnerName: {
    //   type: String,
    //   default: ''
    // },

    // partnerBeltRank: {
    //   type: String,
    //   default: 'unknown',
    // },

    // technique: {
    //   type: String,
    //   default: '',
    // },

    // rollingPartners: {
    //   type: Array,
    //   default: [],
    // },

    // personalPerformanceRating: {
    //   type: Number,
    //   default: 5,
    // },

    // preTrainingGoals: {
    //   type: String,
    //   default: '',
    // },

    // postTrainingGoals: {
    //   type: String,
    //   default: '',
    // },

    // generalNotes: {
    //   type: String,
    //   default: '',
    // },
  },

  setup(props) {
    console.log(props);
  }
}
</script>
