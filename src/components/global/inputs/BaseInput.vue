<template>
  <fieldset>
    <label
      v-if="label"
      :for="inputId"
      class="label"
    >
      {{ label }}
    </label>

    <input
      :placeholder="label"
      :type="inputType"
      class="input"
      :id="inputId"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
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

    inputType: {
      type: String,
      default: 'text',
    },
  },

  emits: ['update:modelValue'],

};
</script>
