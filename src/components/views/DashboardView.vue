<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import UserService from '@/services/UserService';

onMounted(() => {
  console.log('On dashboard mounted');
  const user = UserService.getLoggedInUser();
  console.log('🚀 ~ file: DashboardView.vue:13 ~ onMounted ~ user:', user);

});
</script>

<style scoped lang="scss">
</style>
