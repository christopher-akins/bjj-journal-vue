<template>
  <h1>Login</h1>
{{ test }}
  <label for="username">Username</label>
  <input type="text" name="username" id="username">

  <label for="password">Password</label>
  <input type="password" name="password" id="password">

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AuthenticationService from '@/services/AuthenticationService';

onMounted(() => {
  AuthenticationService.getCsrfToken();
});

const test = import.meta.env.BASE_URL;
</script>
