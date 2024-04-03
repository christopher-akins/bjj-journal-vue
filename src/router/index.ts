import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/components/views/HomeView.vue';
import DashboardView from '@/components/views/DashboardView.vue';
import TrainingJournalView from '@/components/views/TrainingJournalView.vue';
import TrainingNewView from '@/components/views/TrainingNewView.vue';
import TrainingSingleView from '@/components/views/TrainingSingleView.vue';
import ProfileView from '@/components/views/ProfileView.vue';
import RegisterView from '@/components/views/RegisterView.vue';
import LoginView from '@/components/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        hideHeader: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        hideHeader: true,
      },
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/training',
      name: 'training',
      component: TrainingJournalView,
    },
    {
      path: '/training/new',
      name: 'training-new',
      component: TrainingNewView,
    },
    {
      path: '/training/:id',
      name: 'training-single',
      props: true,
      component: TrainingSingleView,
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
