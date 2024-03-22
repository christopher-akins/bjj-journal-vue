<template>
  <fieldset>
    <label
      v-if="label"
      class="label"
    >
      {{ label }}
    </label>

    <div class="select">
      <select
        :modelValue="modelValue"
      >
        <option
          v-for="(option, index) in selectOptions"
          :key="`${option}-${index}`"
          :value="option"
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

};
</script>

<style lang="scss">

</style>
