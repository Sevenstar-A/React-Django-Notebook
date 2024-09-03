import axios, { AxiosInstance } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";


export const api:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:8000",
})

api.interceptors.request.use((config) => {
    const token: string | null = localStorage.getItem(ACCESS_TOKEN)

    // if a token is saved, use it for authentication
    // if (token)
    //     config.headers.Authorization = `Bearer ${token}`;

    console.log("using config ",config)
    return config
    },
    
    (error) => {
        console.log("Api interceptors error ", error)
        return Promise.reject(error)

    })



