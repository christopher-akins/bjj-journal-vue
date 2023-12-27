import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/views/HomeView.vue';
import DashboardView from '../components/views/DashboardView.vue';
import CreateEntryView from '../components/views/CreateEntryView.vue';
import JournalEntryView from '../components/views/JournalEntryView.vue'

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
      path: '/entry/new',
      name: 'newEntry',
      component: CreateEntryView
    },
    {
      path: '/entry/:id',
      name: 'entry',
      component: JournalEntryView
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
