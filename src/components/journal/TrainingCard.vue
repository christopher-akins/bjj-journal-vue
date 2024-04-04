<template>
  <router-link :to="{ name: 'TrainingSingle', params: { id: trainingEvent.id } }"
    :class="['training-card-wrapper', beltClass]">
    <div class="card">
      <div class="card-content">
        <div class="date-wrapper">{{ trainingEvent.trainingDate }}</div>
        <p>{{ trainingEvent.trainingType }}</p>
        <h3>{{ trainingEvent.partnerName }}</h3>
        <p>{{ trainingEvent.technique }}</p>
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
    },
  },

  // setup(props) {
  //   console.log(props.trainingEvent);
  // },

  computed: {
    beltClass() {
      return `${this.trainingEvent.partnerBeltRank}-belt`;
    },
  },
};
</script>

<style></style>
