<template>
  <h1>Logging out...</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from '@/router';
import AuthenticationService from '@/services/AuthenticationService';

onMounted(async () => {
  await AuthenticationService.logoutUser();
  router.push({ name: 'Login' });
});
</script>
