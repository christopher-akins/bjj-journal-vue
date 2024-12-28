<template>
  <div class="container form-container form-auth">
    <h3 class="form-title">Login</h3>
    <div
      v-if="hasError"
      class="error-message"
    >
      {{ errorMessage }}
    </div>
    <form @submit.prevent="handleLogin(formValues)">
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
import { AxiosError } from 'axios';

import BaseInput from '@/components/global/inputs/BaseInput.vue';
import { useAuth } from '@/composables/useAuth';

interface ErrorResponse {
  message: string;
}

const isLoggingIn = ref(false);

const formValues = reactive({
  email: '',
  password: '',
});

const error = ref({
  message: '',
  status: '',
});

const { loginUser } = useAuth();

const hasError = computed(() => error.value.message !== '');
const errorMessage = computed(() => error.value.message + ' Please try again.');

const handleLogin = async (values: { email: string, password: string}) => {
  isLoggingIn.value = true;
  try {
    await loginUser(values);
  }
  catch (err) {
    const axiosError = err as AxiosError<ErrorResponse>;
    if (axiosError.response && axiosError.response.data) {
      error.value.message = axiosError.response.data.message;
    }
    else {
      error.value.message = 'An error occurred. Please try again.';
    }
  }
  finally {
    isLoggingIn.value = false;
  }
};

const handleFocus = () => {
  clearError();
};

const clearError = () => {
  if (error.value.message === '') return;
  error.value.message = '';
  isLoggingIn.value = false;
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
