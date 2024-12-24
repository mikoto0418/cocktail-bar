<!-- src/pages/Home.vue -->
<template>
    <div class="home animate__animated animate__fadeIn">
        <div class="home">
            <section class="banner">
                <h1>欢迎来到调酒吧</h1>
                <p>精选优质酒品，尽在掌握</p>
                <router-link to="/selection" class="btn">立即选酒</router-link>
            </section>
            <section class="recommended">
                <h2>推荐酒款</h2>
                <div class="product-grid">
                    <!-- 假设有推荐酒品的数据 -->
                    <ProductCard v-for="product in recommendedProducts" :key="product.id" :product="product" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
    name: 'Home',
    components: {
        ProductCard,
    },
    data() {
        return {
            recommendedProducts: [
                // 示例数据
                {
                    id: 1,
                    name: '经典马提尼',
                    price: 100,
                    image: '/images/martini.jpg',
                },
                {
                    id: 2,
                    name: '蓝色夏威夷',
                    price: 120,
                    image: '/images/blue_hawaii.jpg',
                },
                // 更多推荐酒品...
            ],
        };
    },
};
</script>

<style scoped>
.home {
    padding: 20px;
}

.banner {
    text-align: center;
    padding: 60px 20px;
    background-color: #fff;
    margin-bottom: 40px;
    border-radius: 8px;
}

.banner h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.banner p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.btn {
    padding: 10px 20px;
    background-color: #ff6b6b;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
}

.recommended {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}
</style>
