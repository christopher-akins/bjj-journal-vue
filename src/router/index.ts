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
  ] as Route[],
  linkActiveClass: 'active-link',
});

export default router;

export interface Route {
  path: string;
  name?: string;
  component: Component;
}
