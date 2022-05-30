import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8080/"})

export const getProducts = () => API.get("/")

export const createOrder = (newOrder) => API.post("/order/create", newOrder)

export const getOrders = () => API.get("/orders")

export const updateOrderStatus = (orderId) => API.get(`/order/${orderId}/completed`)
