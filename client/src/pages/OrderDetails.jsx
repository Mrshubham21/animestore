import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrderById } from "../services/orderService";
import "../styles/orderDetails.css";
const OrderDetails = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      setLoading(true);

      const data = await getOrderById(id);

      setOrder(data.order);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load order."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="order-details-page">
        <h2>Loading Order...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="order-details-page">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-details-page">
        <h2>Order not found.</h2>
      </div>
    );
  }

  return (
    <div className="order-details-page">
      <div className="order-details-container">

        <div className="order-header">
          <div>
            <h1>Order #{order._id.slice(-6).toUpperCase()}</h1>

            <p>
              Placed on{" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>

          <span className={`status ${order.orderStatus.toLowerCase()}`}>
            {order.orderStatus}
          </span>
        </div>

        {/* Shipping Address */}

        <div className="order-section">

          <h2>Shipping Address</h2>

          <div className="address-box">
            <p>{order.shippingAddress.fullName}</p>
            <p>{order.shippingAddress.address}</p>
            <p>
              {order.shippingAddress.city},{" "}
              {order.shippingAddress.state}
            </p>
            <p>{order.shippingAddress.postalCode}</p>
            <p>{order.shippingAddress.country}</p>
          </div>

        </div>

        {/* Payment */}

        <div className="order-section">

          <h2>Payment</h2>

          <div className="payment-box">

            <p>
              <strong>Method:</strong>{" "}
              {order.paymentMethod}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {order.isPaid ? "Paid" : "Pending"}
            </p>

          </div>

        </div>

        {/* Products */}

        <div className="order-section">

          <h2>Ordered Items</h2>

          <div className="ordered-items">

            {order.orderItems.map((item) => (

              <div
                className="ordered-item"
                key={item.product}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="ordered-info">

                  <h3>{item.name}</h3>

                  <p>Size : {item.size}</p>

                  <p>Qty : {item.quantity}</p>

                </div>

                <div className="ordered-price">
                  ₹{item.price.toLocaleString()}
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Summary */}

        <div className="order-summary-card">

          <div className="summary-row">
            <span>Items</span>
            <span>{order.orderItems.length}</span>
          </div>

          <div className="summary-row">
            <span>Total</span>
            <strong>
              ₹{order.totalPrice.toLocaleString()}
            </strong>
          </div>

        </div>

        <Link
          to="/orders"
          className="back-orders-btn"
        >
          ← Back to Orders
        </Link>

      </div>
    </div>
  );
};

export default OrderDetails;