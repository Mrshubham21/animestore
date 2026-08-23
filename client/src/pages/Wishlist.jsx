import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import "../styles/wishlist.css";

const Wishlist = () => {
  const {
    wishlist,
    removeItem,
    loading,
  } = useWishlist();

  const { addToCart } = useCart();

  const handleMoveToCart = async (product) => {
    try {
      const size =
        product.sizes?.length > 0
          ? product.sizes[0]
          : "";

      await addToCart(product, 1, size);
      await removeItem(product._id);

      toast.success("Moved to Cart 🛒");
    } catch (error) {
      console.error(error);
      toast.error("Failed to move product.");
    }
  };
  const handleRemove = async (productId) => {
    try {
      await removeItem(productId);
      toast.success("Removed from Wishlist 💔");
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove product");
    }
  };
  if (loading) {
    return (
      <section className="wishlist-page section-p1">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (wishlist.length === 0) {
    return (
      <section className="wishlist-page section-p1">
        <div className="wishlist-empty">
          <h2>Your Wishlist is Empty ❤️</h2>

          <p>
            Save your favorite anime merchandise here.
          </p>

          <Link
            to="/anime-merch"
            className="normal"
          >
            Explore Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-page section-p1">

      <h2>My Wishlist</h2>

      <div className="wishlist-grid">

        {wishlist.map((product) => (
          <div
            key={product._id}
            className="wishlist-card"
          >
            <img
              src={product.images?.[0]}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.anime}</p>

            <h4>₹{product.price}</h4>

            <div className="wishlist-actions">

              <button
                className="normal"
                onClick={() =>
                  handleMoveToCart(product)
                }
              >
                Move to Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => handleRemove(product._id)}
              >
                Remove
              </button>

            </div>

          </div>
        ))}
      </div>

    </section>
  
  
);
};

export default Wishlist;  