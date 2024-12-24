<!-- src/components/ShoppingCart.vue -->
<template>
    <div class="shopping-cart">
        <!-- 关闭按钮 -->
        <button class="close-btn" @click="$emit('close')">X</button>

        <h3>购物车</h3>
        <div v-if="cartItems.length === 0">
            <p>购物车为空</p>
        </div>
        <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <img :src="item.image" :alt="item.name" />
                <div class="item-info">
                    <h4>{{ item.name }}</h4>
                    <p>¥{{ item.price }} x {{ item.quantity }}</p>
                </div>
                <button @click="removeItem(item.id)">删除</button>
            </div>
            <div class="cart-total">
                <span>总计：</span>
                <span>¥{{ cartTotal }}</span>
            </div>
            <router-link to="/order-confirmation" class="btn">去结算</router-link>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'ShoppingCart',
    setup() {
        const store = useStore();
        const cartItems = computed(() => store.getters['cart/cartItems']);
        const cartTotal = computed(() => store.getters['cart/cartTotal']);

        const removeItem = (id) => {
            store.dispatch('cart/removeFromCart', id);
        };

        return { cartItems, cartTotal, removeItem };
    },
};
</script>

<style scoped>
.shopping-cart {
    position: fixed;
    top: 80px;
    right: 20px;
    width: 300px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 999;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}

.cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.cart-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 10px;
}

.item-info {
    flex: 1;
}

.item-info h4 {
    margin: 0;
    font-size: 1rem;
}

.item-info p {
    margin: 5px 0 0 0;
    color: #555;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-top: 10px;
}

.btn {
    display: block;
    width: 100%;
    padding: 10px 0;
    background-color: #ff6b6b;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
    margin-top: 10px;
}
</style>
