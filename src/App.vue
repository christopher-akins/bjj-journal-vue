<template>
  <div class="main-content">
    <main-header />
    <router-view></router-view>
    <main-footer />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/global/layout/MainHeader.vue';
import MainFooter from '@/components/global/layout/MainFooter.vue';
</script>

<style lang="scss">

.main-content {
  width: 100%;
  display: block;
  position: relative;
}

</style>
