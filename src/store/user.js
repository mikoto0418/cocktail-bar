// src/store/user.js
const user = {
    namespaced: true,
    state: {
        userInfo: null, // { id, name, email, ... }
        // 可以添加更多用户相关状态
    },
    mutations: {
        SET_USER(state, userInfo) {
            state.userInfo = userInfo;
        },
        CLEAR_USER(state) {
            state.userInfo = null;
        },
    },
    actions: {
        setUser({ commit }, userInfo) {
            commit('SET_USER', userInfo);
        },
        logout({ commit }) {
            commit('CLEAR_USER');
        },
    },
    getters: {
        isAuthenticated: state => !!state.userInfo,
        userInfo: state => state.userInfo,
    },
};

export default user;
