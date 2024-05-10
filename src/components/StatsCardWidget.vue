<template>
    <div class="stats-card">
        <div class="stats-card_header">
          <span>{{ chartData.title }}</span>
          <span>
            <component :is="widgetIcon"/>
          </span> 
        </div>
        <div>
            <div class="stats-card_body">
               {{ chartData.count }}
            </div>
            <div class="stats-card_footer">
                <span>
                    <Icon size="20" color="green">
                        <RiseOutlined/>
                    </Icon>
                </span>
                <span>{{ chartData.percentage }}%</span>
                <span>Since last week</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@vicons/utils';
import { RiseOutlined } from '@vicons/antd';
import { defineProps } from 'vue';
const props = defineProps({
    widgetIcon: Object,
    chartData: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
.stats-card {
    background-color: #fff;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    padding: 1rem;
    border-radius: 10px;
    height: 100%;
    gap: 3rem;
}

.stats-card_header {
    /* Add your header styles here */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.stats-card_header span:first-child{
    font-weight: 600;
    font-size: 1rem;
}

.stats-card_header span:last-child{
    width: 30px;
    height: auto;
}

.stats-card_body {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.stats-card_footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
   
}

.stats-card_footer span:first-child{
    padding-top: 5px;
}

.stats-card_footer span:nth-child(2){
    color: green;
    font-weight: 600;
}

.stats-card_footer span:last-child{
    color: #8d8b8b;
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: 0.5%;
}
</style>