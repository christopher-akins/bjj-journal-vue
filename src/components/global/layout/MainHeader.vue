<template>
  <div class="main-header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item logo-wrapper">
          <img src="/images/bjj-journal-logo.svg" alt="BJJ Journal Logo" />
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-if="!$route.meta.hideHeader">
        <div class="navbar-start">
          <router-link to="/training/new" class="navbar-item">Training Entry</router-link>
          <router-link to="/training" class="navbar-item">Past Training</router-link>
          <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>
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

  .navbar {
    background-color: transparent;
  }
}

.navbar-item.logo-wrapper {

  img {
    width: 150px;
    max-height: none;
  }
}

.navbar-start {
  .navbar-item {
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Patua One';
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 0.5rem 1.5rem;

    &:hover {
      color: #635A72;
      background-color: transparent;
    }

    &.active-link {
      color: #6C809D;
    }
  }
}

// Specific Overwrites
a.navbar-item:focus-within {
  background-color: transparent;
}

.navbar-burger {
  height: 54px;

  span {
    height: 2px;
  }
}

</style>

