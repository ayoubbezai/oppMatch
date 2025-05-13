import axios from "axios";

// Get API URL from .env file

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

// add base url and header so no need to do it each time

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// add Bearer token auto

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
