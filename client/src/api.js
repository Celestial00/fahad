// src/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Access your API URL here

const api = axios.create({
  baseURL: API_URL,
});


// Add a request interceptor to add the JWT token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signup = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);
export const getHealthData = () => api.get('/health/data');
export const addHealthData = (data) => api.post('/health/data', data);
export const getReminders = () => api.get('/reminder');
export const addReminder = (data) => api.post('/reminder', data);
