import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/views/HomeView.vue';
import DashboardView from '../components/views/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
  ],
  linkActiveClass: 'active-link',
})

export default router;
