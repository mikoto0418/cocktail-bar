// src/store/orders.js

const orders = {
  namespaced: true,
  state: {
    allOrders: [
      // 示例订单数据
      {
        id: 1,
        items: [
          { id: 1, name: '经典马提尼', price: 100, quantity: 2, image: '/images/martini.jpg' },
          { id: 2, name: '蓝色夏威夷', price: 120, quantity: 1, image: '/images/blue_hawaii.jpg' }
        ],
        total: 320,
        status: '已完成',
        code: 123456,
        date: '2024-04-01',
        paymentMethod: '支付宝'
      }
      // 更多订单...
    ],
  },
  mutations: {
    ADD_ORDER(state, order) {
      state.allOrders.push(order);
    },
    // 其他 mutations...
  },
  actions: {
    addOrder({ commit }, order) {
      commit('ADD_ORDER', order);
    },
    // 移除 fetchOrders，因为不再使用 API
  },
  getters: {
    allOrders: state => state.allOrders,
  },
};

export default orders;
