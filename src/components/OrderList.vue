<!-- src/components/OrderList.vue -->
<template>
    <div class="order-list">
        <div v-if="orders.length === 0">
            <p>暂无订单</p>
        </div>
        <div v-else>
            <div v-for="order in orders" :key="order.id" class="order-item">
                <div class="order-header">
                    <span>订单号：{{ order.id }}</span>
                    <span>状态：{{ order.status }}</span>
                </div>
                <div class="order-details">
                    <div v-for="item in order.items" :key="item.id" class="order-product">
                        <span>{{ item.name }} × {{ item.quantity }}</span>
                        <span>¥{{ item.price * item.quantity }}</span>
                    </div>
                </div>
                <div class="order-footer">
                    <span>总计：¥{{ order.total }}</span>
                    <span v-if="order.status === '未付款'">取餐码：{{ order.code }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderList',
    props: {
        orders: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.order-item {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
}

.order-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.order-details {
    margin-bottom: 10px;
}

.order-product {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.order-footer {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
}
</style>
