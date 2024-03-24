<template>
  <div class="main-container">
    <sidebar-navigation />
    <div class="main-wrapper">
      <router-view></router-view>
      <main-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarNavigation from '@/components/global/layout/SidebarNavigation.vue';
import MainFooter from '@/components/global/layout/MainFooter.vue';
</script>
