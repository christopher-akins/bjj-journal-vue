<template>
  <main-banner banner-title="Select Training Type" />
  <div class="container">
    <div class="training-card-container">
      <div
          v-for="trainingType in TRAINING_TYPES"
          :key="trainingType"
        >
          <article
            class="training-type-card"
            @click="showForm(trainingType)"
          >
            {{ trainingType }}
          </article>
        </div>
    </div>
    <!-- <component :is="selectedForm" /> -->
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainBanner from '@/components/global/layout/MainBanner.vue';
import { TRAINING_TYPES, TrainingType } from '@/types/TrainingType';

console.log(TRAINING_TYPES);

const selectedForm = ref('');

const showForm = (type: TrainingType) => {
  console.log(type.toLowerCase());
  selectedForm.value = type.toLowerCase();
};
// import BaseInput from '@/components/global/inputs/BaseInput.vue';
// import BaseSelect from '@/components/global/inputs/BaseSelect.vue';
// import TextArea from '@/components/global/inputs/TextArea.vue';
// import { BeltRank } from '@/types/BeltRank';

// const formValues = reactive({
//   trainingPartner: '',
//   partnerBeltRank: '',
//   techniquePosition: '',
//   technicalNotes: '',
// });

</script>

<style scoped lang="scss">
.form-container {
  max-width: 560px;
  margin: 2rem auto;
}

.training-card-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

}

.training-type-card {
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    // This is all based off pico's initial box-shadow value, which might be a bit overkill for a simple box-shadow, IMHO.
    // Nevertheless, to be consistent with the initial design system, I've altered it slightly to have a suble impact for hover.
    box-shadow: 0.0145rem 0.029rem 0.18rem rgba(129, 145, 181, 0.05),
      0.0335rem 0.067rem 0.5rem rgba(129, 145, 181, 0.05),
      0.0625rem 0.125rem 1.85rem rgba(129, 145, 181, 0.035),
      0.1125rem 0.225rem 1.35rem rgba(129, 145, 181, 0.07),
      0.2085rem 0.417rem 1.75rem rgba(129, 145, 181, 0.08),
      0.5rem 1rem 4.25rem rgba(129, 145, 181, 0.08),
      0 0 0 0.08rem rgba(129, 145, 181, 0.05);
  }
}

</style>
