<template>
  <div v-if="training">
    <p>{{ training.id }}</p>
    <p>{{ training.partnerName }}</p>

    <p><span>Belt Rank: </span>{{ training.partnerBeltRank }}</p>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TrainingService from '@/services/TrainingService';
import { Training } from '@/types/Training';

const training = ref< Training | null>(null);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  const response = await TrainingService.fetchSingleTraining(props.id);

  training.value = response;
});

</script>

<style scoped lang="scss">
</style>
