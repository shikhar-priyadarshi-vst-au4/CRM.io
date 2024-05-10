import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useDashboardStore } from '@/stores/dashboard';
import {dashboardJSON} from '@/assets/dashboard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const dashboardStore = useDashboardStore();
  dashboardStore.setDashboardData(dashboardJSON);
  next();
})

export default router
