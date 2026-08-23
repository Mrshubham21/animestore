import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { cartTotal } = useCart();
  const navigate = useNavigate();

  const shipping = 0;
  const discount = 0;

  const grandTotal = cartTotal + shipping - discount;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{cartTotal.toLocaleString()}</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span className="free">FREE</span>
      </div>

      <div className="summary-row">
        <span>Discount</span>
        <span>₹{discount}</span>
      </div>

      <hr />

      <div className="summary-total">
        <span>Total</span>
        <span>₹{grandTotal.toLocaleString()}</span>
      </div>

      <button
        className="checkout-btn"
        onClick={handleCheckout}
      >
        🛒 Proceed to Checkout
      </button>

      <div className="secure-payment">
        🔒 Secure Payment <br />
        <small>100% Safe & Secure Checkout</small>
      </div>
    </div>
  );
};

export default CartSummary;