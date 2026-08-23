import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>Your Cart is Empty 🛒</h2>

      <p>Looks like you haven't added anything yet.</p>

      <Link to="/anime-merch">
        <button className="normal">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;