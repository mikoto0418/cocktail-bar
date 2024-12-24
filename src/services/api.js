// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // 本地 JSON Server 地址
  timeout: 10000,
});

// 其他配置...
