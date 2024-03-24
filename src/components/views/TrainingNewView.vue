<template>
  <main-banner banner-title="Select Training Type" />
    <div class="container">
      <div class="training-card-container">
        <router-link
            v-for="trainingType in TRAINING_TYPES"
            :key="trainingType"
            :to="`/training/new/${trainingType.toLowerCase()}`"
            custom
            v-slot="{ navigate }"
          >
            <article
              class="training-type-card"
              @click="navigate"
            >
              {{ trainingType }}
            </article>
          </router-link>
      </div>
    </div>
    <!--
      <div class="container form-container">
        <form>
          <base-input
            input-id="trainingPartner"
            label="Training Partner"
            v-model:modelValue="formValues.trainingPartner"
          />
          <base-select
            input-id="partnerBeltRank"
            label="Partner's Belt Rank"
            :select-options="Object.values(BeltRank)"
            v-model:modelValue="formValues.partnerBeltRank"
          />
          <base-input
            input-id="techniquePosition"
            label="Technique and/or Position"
            v-model:modelValue="formValues.techniquePosition"
          />
          <text-area
            input-id="technicalNotes"
            label="Technical Notes:"
            v-model:modelValue="formValues.technicalNotes"
          />
        </form>
      </div>
    -->

</template>

<script setup lang="ts">
// import { reactive } from 'vue';
import MainBanner from '@/components/global/layout/MainBanner.vue';
import { TRAINING_TYPES } from '@/types/TrainingType';

console.log(TRAINING_TYPES);

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
