<template>
  <div class="field">
    <label
      v-if="label"
      class="label"
    >
      {{ label }}
    </label>
    <div class="control">
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

    selectOptions: {
      type: Array,
      required: true,
    },
  },

};
</script>

<style lang="scss">
select,
.select {
  width: 100%;
}

.control .select select {
  height: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-color: none;
}

.control .select:not(.is-multiple):not(.is-loading)::after {
  border-color: black;
}
</style>
