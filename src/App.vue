<template>
  <div class="main-container">
    <main-header />
    <div class="main-wrapper">
      <router-view></router-view>
    </div>
    <main-footer />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/global/layout/MainHeader.vue';
import MainFooter from '@/components/global/layout/MainFooter.vue';
</script>
