<template>
<div class="container is-max-desktop form-container">
  <form id="registrationForm">
    <base-input
      input-id="unsernameInput"
      label="Username"
      v-model="formValues.userName"
    />
    <base-input
      input-id="passwordInput"
      label="Password"
      input-type="password"
      v-model="formValues.password"
    />
    <base-input
      input-id="reEnterPasswordInput"
      label="Re-enter Password:"
      input-type="password"
      v-model="formValues.reEnterPassword"
    />
  </form>
</div>

</template>

<script setup lang="ts">
import BaseInput from '@/components/global/inputs/BaseInput.vue';
import { reactive } from 'vue';

const formValues = reactive({
  userName: '',
  password: '',
  reEnterPassword: '',
});

</script>
