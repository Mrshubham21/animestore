import { useCart } from "../context/CartContext";

import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import EmptyCart from "../components/Cart/EmptyCart";

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