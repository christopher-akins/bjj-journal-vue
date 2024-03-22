<template>
  <fieldset>
    <label
      v-if="label"
      :for="inputId"
    >
      {{ label }}
    </label>

    <textarea
      :placeholder="label"
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

<style lang="scss" scoped>
  textarea::placeholder {
    opacity: 0.5;
  }
</style>
