<template>
  <div class="container form-container form-auth">
    <h3 class="form-title">Login</h3>
    <div
      v-if="hasError"
      class="error-message"
    >
      {{ errorMessage }}
    </div>
    <form @submit.prevent="loginUser(formValues)">
      <base-input
        v-model="formValues.email"
        input-id="emailLoginInput"
        label="Email"
        input-type="email"
        placeholder="Enter your email"
        :error="hasError"
        @focus="handleFocus"
      />
      <base-input
        v-model="formValues.password"
        input-id="passwordLoginInput"
        label="Password"
        input-type="password"
        placeholder="Enter your password"
        :error="hasError"
        @focus="handleFocus"
      />
      <div v-if="!isLoggingIn">
        <button class="button is-primary">Login</button>
      </div>
    </form>
    <p class="register-statement">Don't have an account? <router-link :to="{ name: 'Register' }">Register</router-link> for free!</p>
  </div>

</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import router from '@/router';

import BaseInput from '@/components/global/inputs/BaseInput.vue';
import AuthenticationService from '@/services/AuthenticationService';

const isLoggingIn = ref(false);

const formValues = reactive({
  email: '',
  password: '',
});

const error = ref({
  message: '',
  status: '',
});

const hasError = computed(() => error.value.message !== '');
const errorMessage = computed(() => error.value.message + ' Please try again.');

const loginUser = async (values: { email: string, password: string }) => {
  isLoggingIn.value = true;
  const response = await AuthenticationService.loginUser(values);

  if (response.status === 200) {
    router.push({ name: 'Profile' });
  }
  else {
    error.value.message = response.response.data.message;
  }

  isLoggingIn.value = false;
};

const handleFocus = () => {
  clearError();
};

const clearError = () => {
  if (error.value.message === '') return;
  error.value.message = '';
};

</script>

<style scoped lang="scss">
.register-statement,
.register-statement a {
  font-size: 0.8rem;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  font-style: italic;
}

</style>
