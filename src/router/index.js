// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Selection from '../pages/Selection.vue';
import WineDetail from '../pages/WineDetail.vue';
import OrderConfirmation from '../pages/OrderConfirmation.vue';
import PaymentVerification from '../pages/PaymentVerification.vue';
import OrderSuccess from '../pages/OrderSuccess.vue';
import MyAccount from '../pages/MyAccount.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/selection', name: 'Selection', component: Selection },
    { path: '/wine/:id', name: 'WineDetail', component: WineDetail, props: true },
    { path: '/order-confirmation', name: 'OrderConfirmation', component: OrderConfirmation },
    { path: '/payment-verification', name: 'PaymentVerification', component: PaymentVerification },
    { path: '/order-success', name: 'OrderSuccess', component: OrderSuccess },
    { path: '/my-account', name: 'MyAccount', component: MyAccount },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
