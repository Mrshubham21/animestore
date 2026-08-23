import api from "./axios";

// =======================
// Create Order
// =======================
export const createOrder = async (orderData) => {
  const { data } = await api.post("/orders", orderData);
  return data;
};

// =======================
// Get My Orders
// =======================
export const getMyOrders = async () => {
  const { data } = await api.get("/orders/myorders");
  return data;
};

// =======================
// Get Single Order
// =======================
export const getOrderById = async (id) => {
  const { data } = await api.get(`/orders/${id}`);
  return data;
};
// =======================
// Get All Orders - Admin
// =======================
export const getAllOrders = async () => {
  const { data } = await api.get("/orders/admin/all");
  return data;
};

// =======================
// Update Order Status - Admin
// =======================
export const updateOrderStatus = async (id, status) => {
  const { data } = await api.put(`/orders/admin/${id}/status`, { status });
  return data;
};
