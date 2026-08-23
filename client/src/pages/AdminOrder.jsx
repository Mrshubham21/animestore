import { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrderStatus,
} from "../services/orderService";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getAllOrders();
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Get Admin Orders Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const data = await updateOrderStatus(id, status);

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? data.order : order
        )
      );
    } catch (error) {
      console.error("Update Status Error:", error);
      alert("Failed to update order status");
    }
  };

  if (loading) {
    return (
      <div className="admin-products">
        <h1>Loading Orders...</h1>
      </div>
    );
  }

  return (
    <div className="admin-products">
      <div className="admin-header">
        <h1>Manage Orders</h1>
      </div>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  #{order._id.slice(-6)}
                </td>

                <td>
                  <strong>
                    {order.user?.name || "Unknown"}
                  </strong>
                  <br />
                  <small>
                    {order.user?.email || ""}
                  </small>
                </td>

                <td>
                  {order.orderItems.map((item, index) => (
                    <div key={index}>
                      {item.name} × {item.quantity}
                      <br />
                      <small>
                        Size: {item.size}
                      </small>
                    </div>
                  ))}
                </td>

                <td>₹{order.totalPrice}</td>

                <td>{order.paymentMethod}</td>

                <td>
                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange(
                        order._id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrder;