<template>
    <main-banner banner-title="Training History" />
    <div class="container">
      <training-card
        v-for="training in trainingList"
        :key="training.id"
        :training-event="training"
      />
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useTrainingStore } from '@/stores/TrainingStore';
// import TrainingService from '@/services/TrainingService';

import MainBanner from '@/components/global/layout/MainBanner.vue';
import TrainingCard from '@/components/journal/TrainingCard.vue';

export default {
  components: {
    MainBanner,
    TrainingCard,
  },

  setup() {
    const store = useTrainingStore();
    const { trainingList } = storeToRefs(store);

    onMounted(() => {
      store.fetchAllTrainings();
    });

    return {
      trainingList
    }
  }
}
</script>

<style scoped lang="scss">
</style>
