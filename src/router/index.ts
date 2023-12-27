import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/components/views/HomeView.vue';
import DashboardView from '@/components/views/DashboardView.vue';
import TrainingJournalView from '@/components/views/TrainingJournalView.vue';
import TrainingNewView from '@/components/views/TrainingNewView.vue';
import TrainingSingleView from '@/components/views/TrainingSingleView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/training',
      name: 'training',
      component: TrainingJournalView
    },
    {
      path: '/training/new',
      name: 'training-new',
      component: TrainingNewView
    },
    {
      path: '/training/:id',
      name: 'training-single',
      component: TrainingSingleView
    }
  ] as Route[],
  linkActiveClass: 'active-link',
})

export default router;

export interface Route {
  path: string;
  name?: string;
  component: Component;
}
