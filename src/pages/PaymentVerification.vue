<!-- src/pages/PaymentVerification.vue -->
<template>
    <div class="payment-verification">
        <h2>支付检测</h2>
        <p>正在处理您的支付，请稍候...</p>
        <div class="progress-bar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
        <p v-if="progress >= 100">支付成功！正在跳转...</p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
    name: 'PaymentVerification',
    setup() {
        const progress = ref(0);
        const router = useRouter();
        const route = useRoute();
        const orderId = route.query.orderId;

        onMounted(() => {
            // 模拟支付检测
            const interval = setInterval(() => {
                if (progress.value < 100) {
                    progress.value += 10;
                } else {
                    clearInterval(interval);
                    // 更新订单状态（假设有 API）
                    // 跳转到下单成功页
                    router.push({ name: 'OrderSuccess', query: { orderId } });
                }
            }, 500);
        });

        return { progress };
    },
};
</script>

<style scoped>
.payment-verification {
    padding: 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
}

.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    margin: 20px 0;
    overflow: hidden;
}

.progress {
    height: 100%;
    background-color: #ff6b6b;
    width: 0;
    transition: width 0.5s;
}
</style>
