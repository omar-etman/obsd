import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8080/"})

export const getProducts = () => API.get("/products")

export const getCategories = () => API.get("/categories")

export const createOrder = (newOrder) => API.post("/order/create", newOrder)

export const getOrders = () => API.get("/orders")

export const getCompletedOrders = () => API.get("/orders/completed")

export const updateOrderStatus = (orderId) => API.get(`/order/${orderId}/completed`)

export const getOrderById = (orderId) => API.get(`/order/${orderId}`)