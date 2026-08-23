import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

import {
  getCart,
  addToCart as addToCartAPI,
  updateCartItem,
  removeFromCart as removeFromCartAPI,
  clearCart as clearCartAPI,
} from "../services/cartService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();

  const [cartItems, setCartItems] = useState([]);

  // Convert backend cart format -> frontend format
const formatCartItems = (cart) => {
  if (!cart?.items) return [];

  return cart.items
    .filter((item) => item.product) // Skip invalid products
    .map((item) => ({
      _id: item.product._id,
      name: item.product.name,
      price: item.product.price,
      images: item.product.images || [],
      stock: item.product.stock,
      quantity: item.quantity,
      selectedSize: item.size,
    }));
};

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) {
        setCartItems([]);
        return;
      }

      try {
        const cart = await getCart();
        setCartItems(formatCartItems(cart));
      } catch (error) {
        console.error("Fetch Cart Error:", error);
      }
    };

    fetchCart();
  }, [user]);

  const addToCart = async (product, quantity, selectedSize) => {
    try {
      const cart = await addToCartAPI(
        product._id,
        quantity,
        selectedSize
      );

      setCartItems(formatCartItems(cart));
    } catch (error) {
      console.error("Add Cart Error:", error);
      throw error;
    }
  };

  const updateQuantity = async (
    productId,
    selectedSize,
    quantity
  ) => {
    try {
      const cart = await updateCartItem(
        productId,
        quantity,
        selectedSize
      );

      setCartItems(formatCartItems(cart));
    } catch (error) {
      console.error("Update Cart Error:", error);
    }
  };

  const removeFromCart = async (
    productId,
    selectedSize
  ) => {
    try {
      const cart = await removeFromCartAPI(
        productId,
        selectedSize
      );

      setCartItems(formatCartItems(cart));
    } catch (error) {
      console.error("Remove Cart Error:", error);
    }
  };

  const clearCart = async () => {
    try {
      await clearCartAPI();
      setCartItems([]);
    } catch (error) {
      console.error("Clear Cart Error:", error);
    }
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);