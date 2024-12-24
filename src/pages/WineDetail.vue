<!-- src/pages/WineDetail.vue -->
<template>
    <div class="wine-detail">
        <div class="back-link">
            <router-link to="/selection">← 返回选酒</router-link>
        </div>
        <div class="detail-container">
            <img :src="product.image" :alt="product.name" />
            <div class="info">
                <h2>{{ product.name }}</h2>
                <p class="price">¥{{ product.price }}</p>
                <p class="description">{{ product.description }}</p>
                <p class="stock">库存：{{ product.stock }}</p>
                <button @click="addToCart" :disabled="!product.stock">加入购物车</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'WineDetail',
    setup() {
        const store = useStore();
        const route = useRoute();
        const product = ref({});

        onMounted(() => {
            const productId = parseInt(route.params.id);
            // 假设有 API 可以获取产品详情
            // 这里使用示例数据
            const fetchedProduct = {
                id: productId,
                name: '经典马提尼',
                price: 100,
                image: '/images/martini.jpg',
                description: '经典的马提尼鸡尾酒，口感清新。',
                stock: 10,
            };
            product.value = fetchedProduct;
        });

        const addToCart = () => {
            store.dispatch('cart/addToCart', product.value);
        };

        return { product, addToCart };
    },
};
</script>

<style scoped>
.wine-detail {
    padding: 20px;
}

.back-link {
    margin-bottom: 20px;
}

.detail-container {
    display: flex;
    gap: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
}

.detail-container img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
}

.info {
    flex: 1;
}

.info h2 {
    margin-top: 0;
    font-size: 2rem;
}

.price {
    color: #ff6b6b;
    font-size: 1.5rem;
    margin: 10px 0;
}

.description {
    margin: 10px 0;
}

.stock {
    margin: 10px 0;
    color: #555;
}

.info button {
    padding: 10px 20px;
    background-color: #ff6b6b;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.info button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
