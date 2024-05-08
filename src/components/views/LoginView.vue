<template>
  <div class="container form-container form-auth">
    <h3 class="form-title">Login</h3>
    <form @submit.prevent="loginUser(formValues)">
      <base-input
        v-model="formValues.email"
        input-id="emailLoginInput"
        label="Email"
        input-type="email"
        placeholder="Enter your email"
      />
      <base-input
        v-model="formValues.password"
        input-id="passwordLoginInput"
        label="Password"
        input-type="password"
        placeholder="Enter your password"
      />
      <div v-if="!isLoggingIn">
        <button class="button is-primary">Login</button>
      </div>
    </form>
  </div>

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import router from '@/router';

import BaseInput from '@/components/global/inputs/BaseInput.vue';
import AuthenticationService from '@/services/AuthenticationService';

const isLoggingIn = ref(false);

const formValues = reactive({
  email: '',
  password: '',
});

const loginUser = async (values: { email: string, password: string }) => {
  isLoggingIn.value = true;
  const response = await AuthenticationService.loginUser(values);
  console.log('🚀 ~ file: LoginView.vue:42 ~ loginUser ~ response:', response);

  if (response.status === 200) {
    router.push({ name: 'TrainingNew' });
  }
  else {
    console.error('Login failed');
  }
  isLoggingIn.value = false;
};

</script>

<style scoped lang="scss">

</style>
