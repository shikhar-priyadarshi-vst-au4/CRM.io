<template>
    <div class="chart-card">
        <div class="chart-card_header">
            {{ chartData.title }}
        </div>
        <div class="chart-card_body">
            <component :is="chartComponent"  :chartData="chartingData" :options="chartingData.options" cssClasses="chart-card_chart"/>
        </div>
    </div>
</template>

<script setup>
import { Chart, registerables } from "chart.js";
import { onMounted, reactive } from 'vue';

Chart.register(...registerables);

const props = defineProps({
    chartComponent: Object,
    chartData: {
        type: Object,
        required: true
    }
});


const chartingData = reactive({
    labels: '',
    datasets: [
    ], 
    options: {} 
}) 
onMounted(() => {
    chartingData.labels = props.chartData.label;
    chartingData.datasets.push({
        label: props.chartData.title,
        backgroundColor: '#f87979',
        data: props.chartData.data,
    });
    chartingData.options = {
            responsive: true,
            options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false // Remove y-axis grid lines
          }
        },
        x: {
          grid: {
            display: false // Remove x-axis grid lines
          }
        }
      }
    },
        }
})

</script>

<style scoped>
.chart-card {
    background-color: #fff;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    border-radius: 10px;
    padding: 20px;
    height: 100%;
}

.chart-card_header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 600;
}

.chart-card_body {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
}

.chart-card_chart {
    width: 100%;
    height: 100%;
}

</style>