import { createContext, useContext, useEffect, useState } from "react";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../services/wishlistService";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, [user]);

  const loadWishlist = async () => {
    try {
      if (!user) {
        setWishlist([]);
        setLoading(false);
        return;
      }

      const data = await getWishlist();

     const items = data.items
  .map((item) => item.product)
  .filter(Boolean);

console.log(items);

      setWishlist(items);
    } catch (error) {
      console.error("Load Wishlist Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const isWishlisted = (productId) => {
    return wishlist.some(
      (product) => product?._id === productId
    );
  };

 const addItem = async (productId) => {
  const data = await addToWishlist(productId);

  console.log("Backend Response:", data);
  console.log("Wishlist Items:", data.items);

  setWishlist(
    data.items.map((item) => item.product).filter(Boolean)
  );
};
  const removeItem = async (productId) => {
    try {
      const data = await removeFromWishlist(productId);

      setWishlist(data.items.map((item) => item.product));
    } catch (error) {
      console.error("Remove Wishlist Error:", error);
    }
  };

  const toggleWishlist = async (productId) => {
    if (isWishlisted(productId)) {
      await removeItem(productId);
    } else {
      await addItem(productId);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        addItem,
        removeItem,
        toggleWishlist,
        isWishlisted,
        wishlistCount: wishlist.length,
        refreshWishlist: loadWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);