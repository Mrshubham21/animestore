import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const increase = () => {
    updateQuantity(
      item._id,
      item.selectedSize,
      item.quantity + 1
    );
  };

  const decrease = () => {
    if (item.quantity > 1) {
      updateQuantity(
        item._id,
        item.selectedSize,
        item.quantity - 1
      );
    }
  };

  return (
    <div className="cart-item">
      <img
        src={item.images?.[0]}
        alt={item.name}
      />

      <div className="cart-info">
        <h3>{item.name}</h3>

        <p className="anime-name">
          Anime Merchandise
        </p>

        <div className="size-badge">
          Size: {item.selectedSize}
        </div>

        <p className="unit-price">
          ₹{item.price.toLocaleString()}
        </p>

        <div className="cart-quantity">
          <button onClick={decrease}>−</button>

          <span>{item.quantity}</span>

          <button onClick={increase}>+</button>
        </div>

        <button
          className="remove-btn"
          onClick={() =>
            removeFromCart(
              item._id,
              item.selectedSize
            )
          }
        >
          🗑 Remove
        </button>
      </div>

      <div className="cart-price">
        <p>Total</p>

        <h3>
          ₹
          {(
            item.price * item.quantity
          ).toLocaleString()}
        </h3>
      </div>
    </div>
  );
};

export default CartItem;