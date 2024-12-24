// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/main.scss'; // 引入全局样式
import 'animate.css'; // 引入 Animate.css

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
