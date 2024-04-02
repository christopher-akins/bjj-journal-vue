<template>
  <div 
    class="sidebar-container"
    :class="!isSidebarExpanded ? 'collapsed' : ''"
  >
    <div class="logo-wrapper">
      <div
        class="sidebar-slider-button"
        @click="toggleSidebar"
      >
        <FontAwesomeIcon :icon="isSidebarExpanded ? faChevronLeft : faChevronRight" />
      </div>
      <router-link to="/">
        <img :src="isSidebarExpanded ? `/images/bjj-journal-logo.svg` : `/images/bjj-journal-logo-light.svg`" alt="BJJ Journal Logo" />
      </router-link>
    </div>
    <div class="nav-links-wrapper">
      <router-link
        v-for="link in sidebarLinks"
        :to="link.toName"
        :key="link.toName"
        class="navbar-item"
      >
        <FontAwesomeIcon :icon=link.icon class="menu-icon" />
        <span v-if="isSidebarExpanded">{{ link.title }}</span>
      </router-link>
    </div>
    <div class="profile-links-wrapper">
      <router-link to="profile" class="navbar-item">
        <FontAwesomeIcon :icon=faUser class="menu-icon" />
        <span v-if="isSidebarExpanded">Profile</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUser,
  faChartPie,
  faPencil,
  faPersonRunning,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
];

const isSidebarExpanded = ref(true);

const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value;
};

</script>

<style scoped lang="scss">
// For .sidebar-container layout specifics see global styles in
// `src/scss/layout/_main.scss`

.sidebar-slider-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 118px;
  right: -21px;
  width: 35px;
  height: 35px;
  border: 5px solid var(--primary-font-color);
  border-radius: 50%;
  background-color: var(--body-bg-color);
  padding: 0.25rem;
  cursor: pointer;
}

.logo-wrapper {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.navbar-item {
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  font-weight: 700;
  line-height: 30px;
  color: var(--primary-font-color);
  text-decoration: none;
  text-transform: uppercase;

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

.collapsed {
  .navbar-item {
    color: var(--body-bg-color);

    .menu-icon {
      padding-right: 0px;
    }
  }

  .logo-wrapper {
    img {
      width: 45px;
    }
  }

  .nav-links-wrapper,
  .profile-links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
