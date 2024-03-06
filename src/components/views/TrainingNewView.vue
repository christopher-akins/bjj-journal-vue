<template>
    <main-banner banner-title="Enter New Training" />
    <div class="container is-max-desktop form-container">
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
    <div>{{  formValues }}</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import MainBanner from '@/components/global/layout/MainBanner.vue';
import BaseInput from '@/components/global/inputs/BaseInput.vue';
import BaseSelect from '@/components/global/inputs/BaseSelect.vue';
import TextArea from '@/components/global/inputs/TextArea.vue';
import { BeltRank } from '@/types/BeltRank';

const formValues = reactive({
  trainingPartner: '',
  partnerBeltRank: '',
  techniquePosition: '',
  technicalNotes: '',
});

onMounted(() => {
  console.log(Object.values(BeltRank));
});

</script>

<style scoped lang="scss">
.form-container {
  max-width: 560px;
  margin: 2rem auto;
}

</style>
