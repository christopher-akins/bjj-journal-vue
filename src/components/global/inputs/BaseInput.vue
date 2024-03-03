<template>
  <div class="field">
    <label
      v-if="label"
      :for="inputId"
      class="label"
    >
      {{ label }}
    </label>
    <div class="control">
      <input
        :placeholder="label"
        :type="inputType"
        class="input"
        :id="inputId"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
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

    inputType: {
      type: String,
      default: 'text',
    },
  },

};
</script>
