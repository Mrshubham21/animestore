import api from "./axios";

export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data.cart;
};

export const addToCart = async (productId, quantity, size) => {
  console.log("Sending:", {
    productId,
    quantity,
    size,
  });

  const response = await api.post("/cart", {
    productId,
    quantity,
    size,
  });

  return response.data.cart;
};

export const updateCartItem = async (productId, quantity, size) => {
  const response = await api.put(`/cart/${productId}`, {
    quantity,
    size,
  });

  return response.data.cart;
};

export const removeFromCart = async (productId, size) => {
  const response = await api.delete(`/cart/${productId}`, {
    data: { size },
  });

  return response.data.cart;
};

export const clearCart = async () => {
  await api.delete("/cart/clear");
};