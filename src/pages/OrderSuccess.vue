<!-- src/pages/OrderSuccess.vue -->
<template>
    <div class="order-success">
        <h2>下单成功！</h2>
        <p>您的订单已成功提交。</p>
        <p>取餐码：<strong>{{ orderCode }}</strong></p>
        <router-link to="/my-account" class="btn">查看我的订单</router-link>
        <router-link to="/" class="btn">返回首页</router-link>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
    name: 'OrderSuccess',
    setup() {
        const store = useStore();
        const route = useRoute();
        const orderId = parseInt(route.query.orderId);
        const order = computed(() =>
            store.state.orders.allOrders.find(order => order.id === orderId)
        );
        const orderCode = computed(() => (order.value ? order.value.code : 'N/A'));

        return { orderCode };
    },
};
</script>

<style scoped>
.order-success {
    padding: 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
}

.order-success h2 {
    color: #28a745;
}

.order-success p {
    margin: 10px 0;
}

.btn {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    background-color: #ff6b6b;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
}
</style>
