<template>
  <div class="sidebar-container">
      <div class="logo-wrapper">
        <router-link to="/">
          <img src="/images/bjj-journal-logo.svg" alt="BJJ Journal Logo" />
        </router-link>
      </div>
      <router-link
        v-for="link in sidebarLinks"
        :to="link.toName"
        class="navbar-item"
        :key="link.toName"
      >
        <FontAwesomeIcon :icon=link.icon class="menu-icon" />
        <span>{{ link.title }}</span>
      </router-link>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChartPie, faPencil, faPersonRunning } from '@fortawesome/free-solid-svg-icons';

const sidebarLinks = [
  {
    toName: 'training-new',
    icon: faPencil,
    title: 'New Training',
  },
  {
    toName: 'training',
    icon: faPersonRunning,
    title: 'Past Training',
  },
  {
    toName: 'dashboard',
    icon: faChartPie,
    title: 'Dashboard',
  },
]
</script>

<style scoped lang="scss">
// For .sidebar-container layout specifics see global styles in
// `src/scss/layout/_main.scss`

.logo-wrapper {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--primary-font-color);
  margin-bottom: 1rem;
}

.navbar-item {
  display: flex;
  align-items: center;
  color: var(--primary-font-color);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 30px;
  margin: 1.25rem 0;

  .menu-icon {
    height: 24px;
    width: 24px;
    padding-right: 0.8rem;
  }
}

.logo-wrapper {
  img {
    width: 60px;
  }
}
</style>
