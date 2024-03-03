<template>
  <div class="field">
    <label
      :for="inputId"
      class="label"
    >
      {{ label }}
    </label>
    <div class="control">
      <textarea
        :placeholder="label"
        class="textarea"
        :id="inputId"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      ></textarea>
    </div>
  </div>
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
