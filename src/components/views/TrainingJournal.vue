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

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { useTrainingStore } from '@/stores/TrainingStore';

import MainBanner from '@/components/global/layout/MainBanner.vue';
import TrainingCard from '@/components/journal/TrainingCard.vue';

const store = useTrainingStore();
const { trainingList } = storeToRefs(store);

onMounted(() => {
  store.fetchAllTrainings();
});

</script>
