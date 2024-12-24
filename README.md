------

# 调酒吧前端项目

本项目是一个使用 **Vue.js** (基于 **Vite**) 构建的调酒网页，提供了酒品列表、购物车、下单等功能示例。您可以根据此项目轻松扩展自己的业务逻辑。

## 目录

1. 功能概述
2. 项目结构
3. 环境要求
4. 安装与运行
5. 如何修改页面内容
   - 首页“推荐酒款”
   - 选酒页面的分类与搜索
   - 修改页面配色
   - 修改购物车显示
   - 其它常见修改点
6. 打包与部署
7. 更多说明

------

## 功能概述

- **首页**：展示特色宣传和“推荐酒款”列表。
- **选酒页面**：可按分类查看或搜索酒品，支持添加到购物车。
- **酒品详情页**：展示单个酒品的详细信息。
- **订单流程**：包括订单确认、支付检测、下单成功，显示取餐码等。
- **我的页面**：管理订单（查看全部订单、未付款订单、历史订单等）。

------

## 项目结构

```
cocktail-bar/
├── public/
├── src/
│   ├── assets/
│   │   └── images/           # 图片等静态资源
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── OrderList.vue
│   │   ├── ProductCard.vue
│   │   ├── SearchBar.vue
│   │   └── ShoppingCart.vue
│   ├── pages/
│   │   ├── Home.vue          # 首页
│   │   ├── Selection.vue     # 选酒页面
│   │   ├── WineDetail.vue    # 酒的详情页
│   │   ├── OrderConfirmation.vue
│   │   ├── PaymentVerification.vue
│   │   ├── OrderSuccess.vue
│   │   └── MyAccount.vue
│   ├── router/
│   │   └── index.js          # 路由配置
│   ├── services/
│   │   └── api.js            # axios 封装等
│   ├── store/
│   │   ├── cart.js
│   │   ├── index.js          # Vuex 主入口
│   │   ├── orders.js
│   │   └── user.js
│   ├── styles/
│   │   └── main.scss         # 全局样式与配色
│   ├── App.vue
│   ├── main.js
│   └── style.css             # 可能存在的全局 CSS
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

------

## 环境要求

- **Node.js**：推荐 14+ 版本或更高
- **npm**：推荐 6+ 版本或更高
- （可选）**Vue CLI**：如需额外操作

------

## 安装与运行

1. 克隆或下载本项目到本地：

   ```bash
   git clone https://github.com/your-repo/cocktail-bar.git
   cd cocktail-bar
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 运行开发服务器：

   ```bash
   npm run dev
   ```

   - 打开浏览器访问终端输出的地址，通常是 `http://localhost:5173/`

如需修改端口或其他配置，请查看 `vite.config.js`。

------

## 如何修改页面内容

本章节主要说明“修改哪个文件能改动页面上面的哪个项目”，方便您快速定位到相应模块并进行个性化定制。

### 首页“推荐酒款”

- **目标文件**：`src/pages/Home.vue`

- 常见位置

  ：

  - 若示例中有 `recommendedProducts` 数组，一般定义在 `data()` 或 `setup()` 里。
  - 在 `<template>` 中通常会有 `v-for="product in recommendedProducts"`。

- 修改示例

  ：

  ```vue
  <!-- src/pages/Home.vue -->
  <template>
    <div class="home">
      <section class="banner">
        <h1>欢迎来到调酒吧</h1>
        <p>精选优质酒品，尽在掌握</p>
        <router-link to="/selection" class="btn">立即选酒</router-link>
      </section>
  
      <section class="recommended">
        <h2>推荐酒款</h2>
        <div class="product-grid">
          <!-- 这里就是推荐酒款列表 -->
          <ProductCard
            v-for="product in recommendedProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue';
  
  export default {
    name: 'Home',
    components: {
      ProductCard,
    },
    data() {
      return {
        recommendedProducts: [
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
          // 更多推荐酒款...
        ],
      };
    },
  };
  </script>
  ```

  - 如果想添加/删除“推荐酒款”：在 `recommendedProducts` 数组里增删对象即可。
  - 如果想修改标题文案：在 `<template>` 中修改 `欢迎来到调酒吧`、`精选优质酒品` 等文字。

### 选酒页面的分类与搜索

- **目标文件**：`src/pages/Selection.vue`

- 修改示例

  ：

  ```vue
  <!-- src/pages/Selection.vue -->
  <script>
  export default {
    name: 'Selection',
    data() {
      return {
        categories: ['全部', '威士忌', '鸡尾酒', '葡萄酒', '啤酒', '其他'],
        selectedCategory: '全部',
        searchQuery: '',
        products: [
          // 静态产品数据 (或从后端 / store 获取)
        ],
      };
    },
    // ...
  };
  </script>
  ```

  - 如果想新增/删除分类按钮：修改 `categories` 数组即可。
  - 如果想变更搜索规则：在本页面 `<script>` 里找到或定义的 `filteredProducts`（通常是个 computed）里修改过滤逻辑。

### 修改页面配色

- **目标文件**：`src/styles/main.scss`（或 `style.css` / `App.vue` 的 `<style>`）

- 示例

  ：

  ```scss
  // src/styles/main.scss
  body {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
  }
  
  .btn {
    transition: background-color 0.3s;
    &:hover {
      background-color: #ff6b6b;
    }
  }
  ```

- 如果想修改主色调：搜索 `#ff6b6b`（示例颜色）替换成自己的品牌色。

- 如果需要更大规模调色：可将颜色定义到 Sass 变量，比如 `$primary-color: #ff6b6b;`，在全局使用。

### 修改购物车显示

- **目标文件**：`src/components/ShoppingCart.vue`

- 示例

  ：

  ```vue
  <!-- src/components/ShoppingCart.vue -->
  <template>
    <div class="shopping-cart">
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
        </div>
        <div class="cart-total">
          <span>总计：¥{{ cartTotal }}</span>
        </div>
      </div>
    </div>
  </template>
  ```

  - 修改“购物车为空”文案：在 `<template>` 内的 `<p>购物车为空</p>` 位置进行更改。
  - 调整布局或样式：修改本组件 `<style>` 或全局样式中的相应类名。

### 其它常见修改点

- **路由配置**：`src/router/index.js` 中可增删页面路由或修改 path 名；例如 `/selection` → `/choose-wine`。
- **订单流程**：`src/pages/OrderConfirmation.vue`, `PaymentVerification.vue`, `OrderSuccess.vue`。要修改确认订单环节或支付逻辑，可在对应页面的 `<template>` + `<script>` 中编辑。
- **订单数据结构**：`src/store/orders.js` 中可添加字段（提交订单时间、支付时间、订单号）或调整订单状态、支付信息等逻辑。

------

## 打包与部署

1. 构建生产版本：

   ```bash
   npm run build
   ```

   - 构建完成后，生成的静态文件位于 `dist/` 目录。

2. 部署到静态服务器或托管平台：

   - 将 `dist/` 文件夹上传到 **Netlify**, **Vercel**, **GitHub Pages**，或您自己的服务器。

3. 访问

   - 使用对应的域名或 IP 地址即可查看。

------

## 更多说明

- 如果需要模拟后端 API，可使用 [json-server](https://github.com/typicode/json-server) 或自行搭建后端。
- 如果想改动 Vuex 全局状态，可在 `src/store/` 目录下的 `cart.js`, `orders.js`, `user.js` 等文件里修改对应的 state、mutations、actions。
- 运行或修改过程中若遇到报错，请查看浏览器控制台（Console）与命令行中的错误信息进行排查。
