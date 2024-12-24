// src/store/index.js

import { createStore } from 'vuex';
import cart from './cart';
import orders from './orders';
import user from './user';

const store = createStore({
  modules: {
    cart,
    orders,
    user,
  },
});

export default store;
