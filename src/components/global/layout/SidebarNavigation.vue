<template>
    <div
      class="sidebar-container"
      :class="!isSidebarExpanded ? 'collapsed' : ''"
    >
      <div class="logo-wrapper">
        <router-link to="/">
          <img :src="svgSrcValue" />
        </router-link>
      </div>

      <div class="nav-links-wrapper">
        <router-link
          v-for="link in sidebarLinks"
          :to="{ name: link.toName }"
          :key="link.toName"
          class="navbar-item"
        >
          <FontAwesomeIcon :icon=link.icon class="menu-icon" />
          <Transition name="link-text">
            <span v-if="isSidebarExpanded">{{ link.title }}</span>
          </Transition>
        </router-link>
      </div>

      <div class="profile-links-wrapper">
        <router-link :to="{ name: 'profile', params: { username: 'cakins' } }" class="navbar-item">
          <FontAwesomeIcon :icon=faUser class="menu-icon" />
          <Transition name="link-text">
            <span v-if="isSidebarExpanded">Profile</span>
          </Transition>
        </router-link>
      </div>

      <div
        class="sidebar-slider-button"
        @click="toggleSidebar"
      >
        <FontAwesomeIcon :icon="isSidebarExpanded ? faChevronLeft : faChevronRight" />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUser,
  faClockRotateLeft,
  faChartPie,
  faPencil,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const sidebarLinks = [
  {
    toName: 'TrainingNew',
    icon: faPencil,
    title: 'New Training',
  },
  {
    toName: 'Training',
    icon: faClockRotateLeft,
    title: 'Past Training',
  },
  {
    toName: 'dashboard',
    icon: faChartPie,
    title: 'Dashboard',
  },
];

const isSidebarExpanded = ref(true);

const svgSrcValue = computed(() => {
  if (isSidebarExpanded.value) {
    return '/images/bjj-journal-logo.svg';
  }

  return '/images/bjj-journal-logo-light.svg';
});

onMounted(() => {
  window.addEventListener('resize', updateSidebar);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSidebar);
});

const updateSidebar = () => {
  isSidebarExpanded.value = window.innerWidth > 768;
};

const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value;
};

</script>

<style scoped lang="scss">

.sidebar-container {
  position: relative;
  width: 280px;
  height: 100%;
  min-height: 100vh;
  padding: 1rem;
  border-right: 5px solid var(--primary-dark);
  margin-right: 1rem;
  transition: all 0.25s ease-in;

  &.collapsed {
    width: 80px;
    padding: 1rem 0.5rem;
    background-color: var(--body-bg-color-dark);

    @media screen and (max-width: 430px) {
      width: 60px;
      padding: 0.75rem 0.25rem;
      border-right: none;
      margin-right: 0.25rem;
    }
  }
}

.sidebar-slider-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 95px;
  right: -19px;
  width: 33px;
  height: 33px;
  border: 5px solid var(--primary-dark);
  border-radius: 50%;
  background-color: var(--body-bg-color);
  padding: 0.25rem;
  font-size: 18px;
  cursor: pointer;
}

.logo-wrapper {
  padding-bottom: 1rem;

  a {
    border-bottom: none;
    height: 100%;
  }

  img {
    width: 60px;
  }
}

.navbar-item {
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  font-weight: 700;
  line-height: 30px;
  color: var(--primary-font-color);
  text-decoration: none;
  border: none;
  text-transform: uppercase;

  .menu-icon {
    height: 24px;
    width: 24px;
    padding-right: 0.8rem;
  }
}

.sidebar-container.collapsed {
  .navbar-item {
    color: var(--primary-light);

    .menu-icon {
      padding-right: 0px;
    }
  }

  .sidebar-slider-button {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .logo-wrapper {
    text-align: center;

    img {
      width: 40px;
    }

    @media screen and (max-width: 430px) {
      padding-bottom: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }

  .nav-links-wrapper,
  .profile-links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
}

.link-text-enter-from,
.link-text-leave-to {
  opacity: 0;
}

.link-text-enter-to,
.link-text-leave-from {
  opacity: 1;
}

.link-text-enter-active {
  transition: opacity 0.6s;
}
</style>
