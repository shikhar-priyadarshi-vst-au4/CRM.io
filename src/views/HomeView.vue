<template>
  <div class="dashboard-view">
    <div class="dashboard-header">
      <h1>{{ message }}</h1>
      <div class="dashboard-header_notification">
        <Icon size="24">
          <BellOutlined/>
        </Icon>
      </div>
      <div class="dashboard-header_profile">
        <UserProfile user='Administator'/>
      </div>
    </div>
    <div class="dashboard-content">
      <div class="dashboard-content_stats--document">
        <StatsCardWidget :chart-data="document" :widget-icon="FilePdfOutlined"/>
      </div>
      <div class="dashboard-content_stats--contact">
        <StatsCardWidget :chart-data="contact" :widget-icon="ContactsOutlined"/>
      </div>
      <div class="dashboard-content_stats--email">
        <StatsCardWidget :chart-data="email" :widget-icon="MailOutlined"/>
      </div>
      <div class="dashboard-content_chat-group">
        <SidePanelWidget :product-data="popularProducts" :chat-data="chatList"/>
      </div>
      <div class="dashboard-content_chart--workflow">
        <ChartCard :chartComponent="LineChart"  :chart-data="recentWorkflow"/>
      </div>
      <div class="dashboard-content_chart--marketing">
        <ChartCard :chart-component="BarChart" :chart-data="recentMarketing"/>
      </div>
      <div class="dashboard-content_table">
       <TableWidget :documents="documents"/> 
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@vicons/utils';
import { BellOutlined, FilePdfOutlined, ContactsOutlined, MailOutlined } from '@vicons/antd';
import { LineChart, BarChart } from 'vue-chart-3';
import StatsCardWidget from '@/components/StatsCardWidget.vue';
import ChartCard from '@/components/ChartCard.vue';
import TableWidget from '@/components/TableWidget.vue';
import SidePanelWidget from '@/components/SIdePanelWidget.vue';
import UserProfile from '@/components/UserProfile.vue';
import { useDashboardStore } from '@/stores/dashboard';
const message = ref('Overview');
const dashboardStore = useDashboardStore();
const document = dashboardStore.dashboardState.data.document;
const contact = dashboardStore.dashboardState.data.contact;
const email = dashboardStore.dashboardState.data.email;
const recentWorkflow = dashboardStore.dashboardState.data.recentWorkFlow;
const recentMarketing = dashboardStore.dashboardState.data.recentMarketing;
const popularProducts = dashboardStore.dashboardState.data.popularProducts;
const chatList = dashboardStore.dashboardState.data.chatList;
const documents = dashboardStore.dashboardState.data.documents;

</script>

<style scoped>

.dashboard-view{
  flex-grow: 1;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.dashboard-header{
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}

.dashboard-header h1{
  grid-column: 1 / 3;
  grid-row: 1;
  font-weight: 700;
}
.dashboard-header .dashboard-header_notification{
  grid-column: 3 / 4;
  grid-row: 1;
  text-align: end;
  padding: 8px;
}
.dashboard-header .dashboard-header_profile{
  grid-column: 4 / 5;
  grid-row: 1;
}


.dashboard-content{
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .dashboard-content{
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 200px 200px auto;
  grid-auto-flow: row;
  gap: 10px;
  margin-top: 1rem;
}

.dashboard-content_stats--document{
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.dashboard-content_stats--contact{
  grid-column: 3 / 5;
  grid-row: 1 / 2;
}

.dashboard-content_stats--email{
  grid-column: 5 / 7;
  grid-row: 1 / 2;
}

.dashboard-content_chat-group{
  grid-column: 7 / 9;
  grid-row: 1 / 4;
}

.dashboard-content_chart--workflow{
  grid-column: 1 / 4;
  grid-row: 2 / 3;
}

.dashboard-content_chart--marketing{
  grid-column: 4 / 7;
  grid-row: 2 / 3;
}

.dashboard-content_table{
  grid-column: 1 / 7;
  /* grid-row: 3; */
}

}
</style>