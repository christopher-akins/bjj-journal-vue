<template>
  <div class="container form-container form-auth">
    <h3 class="form-title">Login</h3>
    <form>
      <base-input
        v-model="formValues.email"
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <base-input
        v-model="formValues.password"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <button class="button is-primary">Login</button>
    </form>
  </div>

</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import BaseInput from '@/components/global/inputs/BaseInput.vue';
import AuthenticationService from '@/services/AuthenticationService';

const formValues = reactive({
  email: '',
  password: '',
});

onMounted(() => {
  AuthenticationService.getCsrfToken();
});

</script>

<style scoped lang="scss">

</style>
