<template>
    <main-banner banner-title="Enter New Training Entry" />
    <div class="container is-max-desktop form-container">
      <form>
        <base-input
          input-id="trainingPartner"
          label="Training Partner"
          v-model:modelValue="formValues.trainingPartner"
        />
        <base-input
          input-id="partnerBeltRank"
          label="Partner's Belt Rank"
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
    <div>{{  formValues }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import MainBanner from '@/components/global/layout/MainBanner.vue';
import BaseInput from '@/components/global/inputs/BaseInput.vue';
import TextArea from '@/components/global/inputs/TextArea.vue';

const formValues = reactive({
  trainingPartner: '',
  partnerBeltRank: '',
  techniquePosition: '',
  technicalNotes: '',
});

</script>

<style scoped lang="scss">
.form-container {
  max-width: 560px;
  margin: 2rem auto;
}

</style>
