<!-- src/pages/OrderConfirmation.vue -->
<template>
    <div class="order-confirmation">
        <h2>确认订单</h2>
        <div class="order-items">
            <div v-for="item in cartItems" :key="item.id" class="order-item">
                <span>{{ item.name }} × {{ item.quantity }}</span>
                <span>¥{{ item.price * item.quantity }}</span>
            </div>
        </div>
        <div class="order-total">
            <span>总计：</span>
            <span>¥{{ cartTotal }}</span>
        </div>
        <div class="payment-method">
            <h3>选择支付方式</h3>
            <select v-model="selectedPaymentMethod">
                <option value="支付宝">支付宝</option>
                <option value="微信">微信</option>
                <option value="信用卡">信用卡</option>
            </select>
        </div>
        <button @click="confirmOrder" :disabled="!selectedPaymentMethod">确认下单</button>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'OrderConfirmation',
    setup() {
        const store = useStore();
        const router = useRouter();
        const cartItems = computed(() => store.getters['cart/cartItems']);
        const cartTotal = computed(() => store.getters['cart/cartTotal']);
        const selectedPaymentMethod = ref('');

        const confirmOrder = () => {
            // 生成订单对象
            const order = {
                id: Date.now(),
                items: cartItems.value,
                total: cartTotal.value,
                status: '待付款',
                code: Math.floor(100000 + Math.random() * 900000), // 取餐码
                date: new Date(),
                paymentMethod: selectedPaymentMethod.value,
            };
            // 添加到订单列表
            store.dispatch('orders/addOrder', order);
            // 清空购物车
            store.dispatch('cart/clearCart');
            // 跳转到支付检测页
            router.push({ name: 'PaymentVerification', query: { orderId: order.id } });
        };

        return { cartItems, cartTotal, selectedPaymentMethod, confirmOrder };
    },
};
</script>

<style scoped>
.order-confirmation {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
}

.order-confirmation h2 {
    margin-top: 0;
}

.order-items {
    margin: 20px 0;
}

.order-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.order-total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 20px;
}

.payment-method h3 {
    margin-bottom: 10px;
}

.payment-method select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #ff6b6b;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
