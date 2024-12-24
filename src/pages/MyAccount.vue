<!-- src/pages/MyAccount.vue -->
<template>
    <div class="my-account">
        <h2>我的账户</h2>
        <div class="order-tabs">
            <button v-for="tab in tabs" :key="tab" @click="currentTab = tab" :class="{ active: currentTab === tab }">
                {{ tab }}
            </button>
        </div>
        <div class="order-list">
            <OrderList :orders="filteredOrders" />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import OrderList from '../components/OrderList.vue';
import { useStore } from 'vuex';

export default {
    name: 'MyAccount',
    components: {
        OrderList,
    },
    setup() {
        const store = useStore();
        const tabs = ['全部订单', '未付款订单', '历史订单'];
        const currentTab = ref('全部订单');

        const filteredOrders = computed(() => {
            switch (currentTab.value) {
                case '未付款订单':
                    return store.state.orders.allOrders.filter(order => order.status === '未付款');
                case '历史订单':
                    return store.state.orders.allOrders.filter(order => order.status === '已完成');
                case '全部订单':
                default:
                    return store.state.orders.allOrders;
            }
        });

        return { tabs, currentTab, filteredOrders };
    },
};
</script>

<style scoped>
.my-account {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
}

.order-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.order-tabs button {
    padding: 8px 16px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.order-tabs button.active,
.order-tabs button:hover {
    background-color: #ff6b6b;
    color: #fff;
}
</style>
