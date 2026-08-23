import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import LoginRequiredModal from "../LoginRequiredModal/LoginRequiredModal";
import toast from "react-hot-toast";
const ProductCard = ({ product }) => {
  const { user } = useAuth();

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const wishlisted = isWishlisted(product._id);

  const handleWishlist = async (e) => {
    console.log("Heart clicked");

    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      console.log("User not logged in");
      setShowLoginModal(true);
      return;
    }

    console.log("Product ID:", product._id);
    console.log("Wishlisted:", wishlisted);

  try {
  await toggleWishlist(product._id);

  toast.success(
    wishlisted
      ? "Removed from Wishlist 💔"
      : "Added to Wishlist ❤️"
  );
} catch (error) {
  console.error(error);
  toast.error("Something went wrong");
}
  };

  const rating = product.rating || 4.5;
  const reviews = product.numReviews || 0;

  const originalPrice = product.price;

  const finalPrice =
    product.discount > 0
      ? Math.round(
        originalPrice - (originalPrice * product.discount) / 100
      )
      : originalPrice;

  return (
    <>
      <Link
        to={`/anime-merch/${product._id}`}
        className="product-link"
      >
        <div className="pro">
          {/* Wishlist Button */}
          <button
            className={`wishlist-btn ${wishlisted ? "active" : ""
              }`}
            onClick={handleWishlist}
            type="button"
          >
            {wishlisted ? <FaHeart /> : <FaRegHeart />}
          </button>

          {/* Sale Badge */}
          {product.discount > 0 && (
            <span className="sale-badge">
              -{product.discount}%
            </span>
          )}

          {/* New Badge */}
          {product.isNew && (
            <span className="new-badge">
              NEW
            </span>
          )}

          {/* Product Image */}
          <img
            src={product.images?.[0]}
            alt={product.name}
            loading="lazy"
          />

          {/* Product Details */}
          <div className="des">
            <span className="anime-name">
              {product.anime}
            </span>

            <h5>{product.name}</h5>

            <div className="product-rating">
              ⭐ {rating}
              <small> ({reviews})</small>
            </div>

            <div className="price-box">
              <h4>₹{finalPrice}</h4>

              {product.discount > 0 && (
                <span className="old-price">
                  ₹{originalPrice}
                </span>
              )}
            </div>

            <p
              className={`stock ${product.stock > 10
                ? "in-stock"
                : product.stock > 0
                  ? "low-stock"
                  : "out-stock"
                }`}
            >
              {product.stock > 10
                ? "In Stock"
                : product.stock > 0
                  ? "Low Stock"
                  : "Out of Stock"}
            </p>
          </div>
        </div>
      </Link>

      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default ProductCard;