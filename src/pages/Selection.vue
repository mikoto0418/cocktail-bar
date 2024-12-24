<!-- src/pages/Selection.vue -->
<template>
    <div class="selection">
        <!-- 搜索栏组件 -->
        <SearchBar @search="handleSearch" />

        <!-- 分类按钮 -->
        <div class="filters">
            <div class="categories">
                <button v-for="category in categories" :key="category" @click="selectCategory(category)"
                    :class="{ active: selectedCategory === category }">
                    {{ category }}
                </button>
            </div>
        </div>

        <!-- 商品列表 -->
        <div class="product-grid">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>

        <!-- 悬浮购物车组件 -->
        <ShoppingCart />
    </div>
</template>

<script>
import { products } from '../data/products.js'; // 确保路径与实际项目匹配
import SearchBar from '../components/SearchBar.vue';
import ProductCard from '../components/ProductCard.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

export default {
    name: 'Selection',
    components: {
        SearchBar,
        ProductCard,
        ShoppingCart,
    },
    data() {
        return {
            categories: ['全部', '威士忌', '鸡尾酒', '葡萄酒', '啤酒', '其他'],
            selectedCategory: '全部',
            searchQuery: '',
            products, // 导入的静态数据
        };
    },
    computed: {
        // 根据 selectedCategory 与 searchQuery 进行过滤
        filteredProducts() {
            return this.products.filter(product => {
                const inCategory =
                    this.selectedCategory === '全部'
                    || product.category === this.selectedCategory;

                const matchesSearch = product.name
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase());

                return inCategory && matchesSearch;
            });
        },
    },
    methods: {
        handleSearch(query) {
            this.searchQuery = query;
        },
        selectCategory(category) {
            this.selectedCategory = category;
        },
    },
};
</script>

<style scoped>
.selection {
    padding: 20px;
}

.filters {
    margin: 20px 0;
}

.categories {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.categories button {
    padding: 8px 16px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.categories button.active,
.categories button:hover {
    background-color: #ff6b6b;
    color: #fff;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}
</style>
