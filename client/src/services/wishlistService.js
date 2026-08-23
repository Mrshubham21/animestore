import api from "./axios";

// Get Wishlist
export const getWishlist = async () => {
  const { data } = await api.get("/wishlist");
  return data;
};

// Add To Wishlist
export const addToWishlist = async (productId) => {
  const { data } = await api.post("/wishlist", {
    productId,
  });

  return data;
};

// Remove From Wishlist
export const removeFromWishlist = async (productId) => {
  const { data } = await api.delete(`/wishlist/${productId}`);
  return data;
};