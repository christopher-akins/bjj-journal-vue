<template>
  <router-link
  :to="{ name: 'training-single', params: { id: trainingEvent.id } }"
  class="training-card-wrapper">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <div class="date-wrapper">{{ trainingEvent.trainingDate }}</div>
          <p>{{ trainingEvent.trainingType }}</p>
          <h3>{{ trainingEvent.partnerName }}</h3>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">

export default {
  props: {
    trainingEvent: {
      type: Object,
      required: true,
    }
  },

  setup(props) {
    console.log(props);
  }
}
</script>
