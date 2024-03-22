<template>
  <fieldset>
    <label
      v-if="label"
      :for="inputId"
      class="label"
    >
      {{ label }}
    </label>

    <textarea
      :placeholder="label"
      class="textarea"
      :id="inputId"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    ></textarea>
  </fieldset>
</template>

<script lang="ts">

export default {
  props: {
    label: {
      type: String,
      default: '',
    },

    inputId: {
      type: String,
      default: '',
    },

    modelValue: {
      type: [String, Number],
      default: '',
    },
  },

};
</script>
