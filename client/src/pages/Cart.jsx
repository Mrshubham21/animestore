import { useCart } from "../context/CartContext";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";

import "../styles/cart.css";

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart-page section-p1">

      <h1>Shopping Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cartItems.map((item) => (
            <CartItem
              key={`${item._id}-${item.selectedSize}`}
              item={item}
            />
          ))}

        </div>

        <CartSummary />

      </div>

    </section>
  );
};

export default Cart;