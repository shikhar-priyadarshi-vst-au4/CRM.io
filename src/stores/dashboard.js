import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', () => {
  const dashboardState = reactive({
    data: {
      document: {},
      contact: {},
      email: {},
      recentWorkFlow: [],
      recentMarketing: [],
      documents: [],
      popularProducts: [],
      chatList: []
  }})

  const setDashboardData = (data) => {
    dashboardState.data.document = data.document;
    dashboardState.data.contact = data.contact;
    dashboardState.data.email = data.email;
    dashboardState.data.recentWorkFlow = data.recentWorkFlow;
    dashboardState.data.recentMarketing = data.recentMarketing;
    dashboardState.data.documents = data.documents;
    dashboardState.data.popularProducts = data.popularProducts;
    dashboardState.data.chatList = data.chatList;
  }

  return {  dashboardState, setDashboardData }
})
