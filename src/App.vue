<template>
  <div class="main-container">
    <sidebar-navigation />
    <div class="main-content">
      <div class="main-wrapper">
        <router-view />
      </div>
      <main-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import MainFooter from '@/components/global/layout/MainFooter.vue';
import SidebarNavigation from '@/components/global/layout/SidebarNavigation.vue';

import AuthenticationService from '@/services/AuthenticationService';

onBeforeMount(async () => {
  try {
    await AuthenticationService.getCsrfToken();
  }
  catch (error) {
    console.error('Error getting CSRF token', error);
  }
});

</script>
