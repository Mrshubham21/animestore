import { useCart } from "../../context/CartContext";

const OrderSummary = () => {
  const { cartItems, cartTotal } = useCart();

  const shipping = cartTotal >= 999 ? 0 : 99;
  const tax = 0;
  const total = cartTotal + shipping + tax;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="checkout-items">
        {cartItems.map((item) => (
          <div
            key={`${item._id}-${item.selectedSize}`}
            className="checkout-item"
          >
            <img
              src={item.images?.[0]}
              alt={item.name}
            />

            <div className="checkout-item-info">
              <h4>{item.name}</h4>

              <p>Size: {item.selectedSize}</p>

              <p>Qty: {item.quantity}</p>
            </div>

            <strong>
              ₹{(item.price * item.quantity).toLocaleString()}
            </strong>
          </div>
        ))}
      </div>

      <hr />

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{cartTotal.toLocaleString()}</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>

        <span>
          {shipping === 0 ? "FREE" : `₹${shipping}`}
        </span>
      </div>

      <div className="summary-row">
        <span>Tax</span>
        <span>₹{tax}</span>
      </div>

      <hr />

      <div className="summary-total">
        <strong>Total</strong>

        <strong>
          ₹{total.toLocaleString()}
        </strong>
      </div>
    </div>
  );
};

export default OrderSummary;