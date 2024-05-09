<template>
  <div>
    <h1>Profile</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import UserService from '@/services/UserService';

onMounted(() => {
  const user = UserService.getLoggedInUser();
  console.log('🚀 ~ file: ProfileView.vue:11 ~ user:', user);
});

</script>
