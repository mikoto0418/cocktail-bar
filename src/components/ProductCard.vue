<!-- src/components/ProductCard.vue -->
<template>
    <div class="product-card">
        <router-link :to="`/wine/${product.id}`">
            <img :src="product.image" :alt="product.name" />
        </router-link>
        <div class="product-info">
            <router-link :to="`/wine/${product.id}`" class="product-name">{{ product.name }}</router-link>
            <div class="product-price">¥{{ product.price }}</div>
            <button @click="addToCart">加入购物车</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();
        const addToCart = () => {
            store.dispatch('cart/addToCart', props.product);
        };
        return { addToCart };
    },
};
</script>

<style scoped>
.product-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.product-info {
    padding: 10px;
    text-align: center;
}

.product-name {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #333;
    text-decoration: none;
}

.product-price {
    font-size: 1rem;
    color: #ff6b6b;
    margin-bottom: 10px;
}

.product-info button {
    padding: 8px 12px;
    background-color: #ff6b6b;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
}
.product-info button:active {
    transform: scale(0.95);
}
</style>
