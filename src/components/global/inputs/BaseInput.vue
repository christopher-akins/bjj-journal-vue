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
      class="input"
      :class="hasErrorClass"
      :placeholder="label"
      :type="inputType"
      :id="inputId"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="$emit('focus', $event.target)"
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

    error: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue', 'focus'],

  computed: {
    hasErrorClass(): string {
      if (this.error) {
        return 'has-error';
      }

      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
  input::placeholder {
    opacity: 0.5;
  }

  .has-error {
    border-color: red;
    box-shadow: none;
  }
</style>
