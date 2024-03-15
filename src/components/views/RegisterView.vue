<template>
<div class="container is-max-desktop form-container">
  <h2 class="form-title">Register</h2>
  <form id="registrationForm">
    <base-input
      input-id="unsernameInput"
      label="Username"
      v-model="formValues.userName"
    />
    <base-input
      input-id="emailInput"
      label="Email"
      input-type="email"
      v-model="formValues.email"
    />
    <base-input
      input-id="passwordInput"
      label="Password"
      input-type="password"
      v-model="formValues.password"
    />
    <base-input
      input-id="reEnterPasswordInput"
      label="Confirm Password"
      input-type="password"
      v-model="formValues.reEnterPassword"
    />
    <button class="button is-primary">Register</button>
    <p>Already have an account? <a href="/login">Login</a></p>
  </form>
</div>

</template>

<script setup lang="ts">
import BaseInput from '@/components/global/inputs/BaseInput.vue';
import { reactive } from 'vue';

const formValues = reactive({
  userName: '',
  email: '',
  password: '',
  reEnterPassword: '',
});

</script>

<style scoped lang="scss">
body {
  background-color: #a9a8a8;
  color: red;

}

.form-title {
  margin-bottom: 1.6rem;
}

.form-container {
  padding: 1rem 1.6rem 3rem;
  margin-top: 60px;
  max-width: 420px;
  border-top: 0.5rem solid #5c5c5c;
}

</style>
