import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/components/views/HomeView.vue';
import DashboardView from '@/components/views/DashboardView.vue';
import TrainingJournal from '@/components/views/TrainingJournal.vue';
import TrainingNew from '@/components/views/TrainingNew.vue';
import TrainingSingle from '@/components/views/TrainingSingle.vue';
import ProfileView from '@/components/views/ProfileView.vue';
import RegisterView from '@/components/views/RegisterView.vue';
import LoginView from '@/components/views/LoginView.vue';
import LogoutView from '@/components/views/LogoutView.vue';
import PrivacyView from '@/components/views/PrivacyView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
      meta: {
        hideHeader: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        hideHeader: true,
      },
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutView,
      meta: {
        hideHeader: true,
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/training',
      name: 'Training',
      component: TrainingJournal,
    },
    {
      path: '/training/:id',
      name: 'TrainingSingle',
      props: true,
      component: TrainingSingle,
    },
    {
      path: '/training/new',
      name: 'TrainingNew',
      component: TrainingNew,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: PrivacyView,
    },
  ] as Route[],
  linkActiveClass: 'active-link',
});

export default router;

export interface Route {
  path: string;
  name?: string;
  component: Component;
}
