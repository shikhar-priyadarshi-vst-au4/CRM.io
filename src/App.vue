<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import SidebarWidget from './components/SidebarWidget.vue';
import {dashboardJSON} from "./assets/dashboard"
const sidebarLinks = ref([
  {
    label: 'Management', 
    links: [
      { path: '/document', label: 'Document' },
      { path: '/contact', label: 'Contact' },
      { path: '/prospect', label: 'Prospect'},
      { path: '/workflow', label: 'Workflow'}
    ]
  },
  {
    label: 'Connection', 
    links: [
      { path: '/chat-integration', label: 'Chat Integration' },
      { path: '/marketing-automation', label: 'Marketing Automation' },
      { path: '/email-integration', label: 'Email Integration'}
    ]
  },
  {
    label: 'Customer',
    links: [
      { path: '/transactions', label: 'Transactions' },
      { path: '/maintenance', label: 'Maintenance' },
    ]
  }
]);
</script>

<template>
  <div class="appLayout">
    <SidebarWidget :links="sidebarLinks"/>
    <RouterView />
  </div>
</template>

<style scoped>
.appLayout {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
}
</style>
