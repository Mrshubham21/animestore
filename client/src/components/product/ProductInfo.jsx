import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import LoginRequiredModal from "../LoginRequiredModal/LoginRequiredModal";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

const ProductInfo = ({
  product,
  quantity,
  setQuantity,
  selectedSize,
  setSelectedSize,
}) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const {
    addItem,
    removeItem,
    isWishlisted,
  } = useWishlist();

  const wishlisted = isWishlisted(product._id);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error("Please select a size.");
      return;
    }

    if (!user) {
      setShowLoginModal(true);
      return;
    }

    try {
      await addToCart(product, quantity, selectedSize);
      toast.success("Product added to cart!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product to cart.");
    }
  };
  const handleWishlist = async () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    try {
      if (wishlisted) {
        await removeItem(product._id);
        toast.success("Removed from Wishlist 💔");
      } else {
        await addItem(product._id);
        toast.success("Added to Wishlist ❤️");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="product-info">

        <p className="product-anime">
          {product.anime}
        </p>

        <h1>{product.name}</h1>

        <div className="product-rating">
          ⭐ {product.rating.toFixed(1)}
          <span> ({product.numReviews} Reviews)</span>
        </div>

        <div className="price-box">
          <span className="current-price">
            ₹{product.price}
          </span>

          {product.originalPrice > product.price && (
            <span className="old-price">
              ₹{product.originalPrice}
            </span>
          )}

          {product.discount > 0 && (
            <span className="discount-badge">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="product-meta">
          <p><strong>Brand:</strong> {product.brand}</p>

          <p><strong>Category:</strong> {product.category}</p>

          {product.character && (
            <p>
              <strong>Character:</strong> {product.character}
            </p>
          )}

          <p>
            <strong>Status:</strong>{" "}
            <span
              className={
                product.stock > 10
                  ? "stock-green"
                  : product.stock > 0
                    ? "stock-orange"
                    : "stock-red"
              }
            >
              {product.stock > 10
                ? "In Stock"
                : product.stock > 0
                  ? "Low Stock"
                  : "Out of Stock"}
            </span>
          </p>

          <p>
            🚚 Estimated Delivery: 2–5 Days
          </p>
        </div>

        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <div className="product-actions">

          <button
            className="normal add-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0
              ? "Out of Stock"
              : "Add To Cart"}
          </button>

          <button
            className={`wishlist-detail-btn ${wishlisted ? "active" : ""
              }`}
            onClick={handleWishlist}
          >
            {wishlisted ? <FaHeart /> : <FaRegHeart />}
            {wishlisted
              ? " Wishlisted"
              : " Add to Wishlist"}
          </button>

        </div>

        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>

      </div>

      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default ProductInfo;