<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/">调酒吧</router-link>
        </div>
        <ul class="navbar-menu">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/selection">选酒</router-link></li>
            <li><router-link to="/my-account">我的</router-link></li>
        </ul>

        <!-- 使用点击事件控制购物车弹窗 -->
        <div class="navbar-cart" @click="toggleCart">
            <span>购物车 ({{ cartCount }})</span>
        </div>

        <!-- 条件渲染购物车弹窗 -->
        <ShoppingCart v-if="showCart" @close="handleCloseCart" />
    </nav>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ShoppingCart from './ShoppingCart.vue'; // 确认路径正确

export default {
    name: 'Navbar',
    components: {
        ShoppingCart,
    },
    setup() {
        const store = useStore();
        const cartCount = computed(() =>
            store.state.cart.items.reduce((total, item) => total + item.quantity, 0)
        );

        const showCart = ref(false);

        const toggleCart = () => {
            showCart.value = !showCart.value;
        };

        const handleCloseCart = () => {
            showCart.value = false;
        };

        return { cartCount, showCart, toggleCart, handleCloseCart };
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navbar-menu a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
}

.navbar-cart {
    cursor: pointer;
    color: #333;
    font-size: 1rem;
}
</style>
