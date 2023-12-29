<template>
    <main-banner banner-title="Training History" />
    <div class="container">
      <training-card
        v-for="training in trainings"
        :key="training.id"
        :training-event="training"
      />
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import TrainingService from '@/services/TrainingService';

import MainBanner from '@/components/global/layout/MainBanner.vue';
import TrainingCard from '@/components/journal/TrainingCard.vue';

export default {
  components: {
    MainBanner,
    TrainingCard,
  },

  setup() {
    const trainings = ref([]);

    onMounted(async () => {
      const response = await TrainingService.fetchAllTrainings();
      trainings.value = response.data;
    });

    return {
      trainings
    }
  }
}
</script>

<style scoped lang="scss">
</style>
