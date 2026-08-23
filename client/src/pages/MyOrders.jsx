import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyOrders } from "../services/orderService";
import "../styles/orders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const data = await getMyOrders();

      setOrders(data.orders);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load orders."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="orders-page">
        <h2>Loading Orders...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders-page">
        <h2>{error}</h2>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <div className="empty-orders">
          <h2>No Orders Found</h2>
          <p>You haven't placed any orders yet.</p>

          <Link to="/products" className="shop-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-container">

        <h1>My Orders</h1>

        <div className="orders-list">

          {orders.map((order) => (
            <div className="order-card" key={order._id}>

              <div className="order-top">

                <div>
                  <h3>Order #{order._id.slice(-6).toUpperCase()}</h3>

                  <p>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <span className={`status ${order.orderStatus.toLowerCase()}`}>
                  {order.orderStatus}
                </span>

              </div>

              <div className="order-info">

                <p>
                  <strong>Payment:</strong> {order.paymentMethod}
                </p>

                <p>
                  <strong>Total:</strong> ₹
                  {order.totalPrice.toLocaleString()}
                </p>

                <p>
                  <strong>Items:</strong> {order.orderItems.length}
                </p>

              </div>

              <Link
                to={`/orders/${order._id}`}
                className="details-btn"
              >
                View Details
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MyOrders;