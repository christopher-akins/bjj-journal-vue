<template>
  <div class="main-header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item logo-wrapper">
          <img src="/images/bjj-journal-logo.svg" alt="BJJ Journal Logo" width="48px"/>
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/entry/new" class="navbar-item">New Entry</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.main-header {
  width: 100%;
  padding: 0.5rem 1rem;
}

.logo-wrapper {
  img {
    border-radius: 4px;
  }
}

</style>

