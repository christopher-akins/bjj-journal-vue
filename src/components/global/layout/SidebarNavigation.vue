<template>
  <div class="sidebar-container">
    <div class="logo-wrapper">
      <router-link to="/" class="navbar-item logo-wrapper">
        <img src="/images/bjj-journal-logo.svg" alt="BJJ Journal Logo" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.sidebar-container {
  width: 300px;
}

.logo-wrapper {
  display: flex;

  img {
    width: 60px;
  }  
}
</style>
