import axios from "axios";




 export const axiosClients = axios.create({
    baseURL: import.meta.env.VITE_DB_URL
 })
