<!-- src/components/SearchBar.vue -->
<template>
    <div class="search-bar">
        <input type="text" v-model="query" @keyup.enter="submitSearch" placeholder="搜索酒名或品牌" />
        <button @click="submitSearch">搜索</button>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            query: '',
        };
    },
    methods: {
        submitSearch() {
            this.$emit('search', this.query);
        },
    },
};
</script>

<style scoped>
.search-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.search-bar input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-bar button {
    padding: 8px 16px;
    background-color: #ff6b6b;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
