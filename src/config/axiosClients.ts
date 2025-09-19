import axios from "axios";

export const axiosClients = axios.create({
    baseURL: import.meta.env.VITE_DB_URL,
});
axiosClients.interceptors.request.use((config) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
