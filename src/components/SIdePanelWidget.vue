<template>
    <div class="side-panel">
        <h2 class="side-panel_label">Popular Product</h2>
        <ul class="side-panel_list">
            <li v-for="(item, index) in productData" :key="index" class="side-panel_list-item">
                <div class="list-item-avatar"></div>
                <div class="list-item-details">
                    <div>{{ item.product }}</div>
                    <div>{{ item.price }}</div>
                </div>
            </li>
        </ul>
        <h2 class="side-panel_label">Chat</h2>
        <ul class="side-panel_list">
            <li v-for="(item, index) in chatData" :key="index" class="side-panel_list-item">
                <div class="list-item-avatar"></div>
                <div class="list-item-details">
                    <div>{{ item.name }}</div>
                    <div>{{ item.message }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    productData: {
        type: Array,
        required: true
    },
    chatData: {
        type: Array,
        required: true
    }
});

</script>

<style>
.side-panel{
    background-color: #fff;
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.side-panel .side-panel_label{
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
}

.side-panel .side-panel_list{
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 10px;
}

.side-panel_list .side-panel_list-item{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
}

.side-panel_list-item .list-item-avatar{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: inline-flex;
    background-color: #ccc;
}

.side-panel_list-item .list-item-details{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
}

.side-panel_list-item .list-item-details div:first-child{
    font-weight: 600;
    font-size: 0.875rem;
}
.side-panel_list-item .list-item-details div:last-child{
    font-size: 0.75rem;
    color: #aaa;
    font-weight: 600;
}
</style>