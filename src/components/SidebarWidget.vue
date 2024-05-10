<template>
   <aside class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar-header" @click="toggleCollapse">
      <h3>CRM.io</h3>
      <span class="collapse-icon">{{ isCollapsed ? '▸' : '◂' }}</span>
    </div>
    <button class="sidebar-dashboard">
        <IconCommunity/>
        <span>Dashboard</span>
    </button>
    <div class="sidebar-menu">
      <ul>
        <li v-for="(link, index) in links" :key="index">

          <label v-if="link.links.length > 0" class="sidebar-menu_list">
            <strong>{{ link.label }}</strong>
            <router-link v-for="(link, index) in link.links" :key="index" :to="link.path">
                <IconCommunity/>
                <span>{{ link.label }}</span>
            </router-link>
         </label>  
          <router-link v-else :to="link.path">{{ link.text }}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import IconCommunity from './icons/IconCommunity.vue';

const props = defineProps({
  links: {
    type: Array,
    required: true
  }
});

const isCollapsed = ref(false);
function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}
</script>
<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #041737;
  color:#364a70;
  padding: 20px;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 60px; /* Adjust as needed */
}

.sidebar-header {
  margin-bottom: 20px;
  cursor: pointer;
}

.sidebar-header h3{
    color: rgb(162, 119, 40);
    font-style: italic;
    font-weight: 600;
    margin-left: 40px;
}

.collapse-icon {
  float: right;
}

.sidebar-dashboard {
    color: #fff;
    background-color: #346daf;
    border: none;
    outline: none;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 auto;
    width: 90%;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
}

.sidebar-menu ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-menu li {
  margin: 30px 20px 10px;
  border-bottom: 1px solid #364a70;
}

.sidebar-menu li:last-child {
  border-bottom: none;
}

.sidebar-menu li a {
  text-decoration: none;
  color: #92a5ad;
}

.sidebar-menu li a:hover {
  text-decoration: underline;
}

.sidebar-menu .sidebar-menu_list {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}

.sidebar-menu .sidebar-menu_list strong{
    margin-bottom: 20px;
    font-size: 0.875rem;
    text-transform: capitalize;
    font-weight: 600;
}

.sidebar-menu .sidebar-menu_list a{
    padding: 5px 0;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

@media (max-width: 768px) {
    .sidebar {
        display: none;
        width: 250px;
        height: 100%;
        background-color: #041737;
        color:#364a70;
        padding: 20px;
        transition: width 0.3s ease;
    }

}
</style>