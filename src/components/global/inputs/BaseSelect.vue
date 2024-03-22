<template>
  <fieldset>
    <label v-if="label">
      {{ label }}
    </label>

    <div class="select">
      <select
        v-bind="{
          ...$attrs,
          onChange: $event => $emit('update:modelValue', ($event.target as HTMLInputElement).value),
        }"
        :value="modelValue"
        :class="placeholderStyle"
      >
        <option
          value=""
          disabled
          selected
        >
          Select an option
        </option>
        <option
          v-for="(option, index) in selectOptions"
          :key="`${option}-${index}`"
          :value="option"
          :selected="option === modelValue"
        >
          {{ option }}
        </option>
      </select>
    </div>
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

    selectOptions: {
      type: Array,
      required: true,
    },
  },

  computed: {
    placeholderStyle(): string {
      return this.modelValue === '' ? 'placeholder' : '';
    },
  },

};
</script>

<style lang="scss" scoped>
  select.placeholder {
    color: red;
  }
</style>
