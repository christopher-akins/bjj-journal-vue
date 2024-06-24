<template>
  <div>
    <h1>Profile</h1>
    <pre>{{ user }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserService from '@/services/UserService';

const user = ref({});

const getUser = async () => {
  const { data } = await UserService.getLoggedInUser();
  user.value = data;
};

onMounted(() => {
  getUser();
});
</script>
