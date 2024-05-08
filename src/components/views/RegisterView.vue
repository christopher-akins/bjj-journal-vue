<template>
<div class="container form-container form-auth">
  <h3 class="form-title">Register</h3>
  <form id="registrationForm" @submit.prevent="registerUser(formValues)">
    <base-input
      input-id="unsernameInput"
      label="Username"
      v-model="formValues.username"
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
      v-model="formValues.passwordConfirmation"
    />
    <button class="button is-primary">Register</button>
  </form>
  <p class="login-statement">Already have an account? <a href="/login">Login</a></p>
</div>

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseInput from '@/components/global/inputs/BaseInput.vue';

import AuthenticationService from '@/services/AuthenticationService';

import { RegisterUser } from '@/types/RegisterUser';

const formValues = reactive({
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
});

const registerUser = async (payload: RegisterUser) => {
  const apiPayload = {
    name: payload.username,
    email: payload.email,
    password: payload.password,
    password_confirmation: payload.passwordConfirmation,
  };

  const response = await AuthenticationService.registerUser(apiPayload);

  return response;
};

</script>

<style scoped lang="scss">

.login-statement,
.login-statement a {
  font-size: 0.8rem;
}

</style>
