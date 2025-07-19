import axios from "axios";

const APP_BASE_URL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  headers: {
    baseURL: APP_BASE_URL,
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
