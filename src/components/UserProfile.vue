<template>
    <div class="user-profile-dropdown">
        <div></div>
        <span class="user-profile-name">{{ user }}</span>
        <span>
            <Icon size="16">
                <DownOutlined/>
            </Icon>
        </span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { Icon } from '@vicons/utils';
import { DownOutlined } from '@vicons/antd';

const props = defineProps({
    user: {
        type: Object,
    }
});
</script>

<style scoped>
.user-profile-dropdown {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 20px;
   padding-left: 10px;
}

.user-profile-dropdown > div{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
}

.user-profile-name{
    font-weight: 600;
    font-size: 1rem;
}

</style>