import { useEffect, useState } from "react";
import { getAdminStats } from "../services/adminService";
import { getAllOrders } from "../services/orderService";
import StatCard from "../components/admin/StatCard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsData, ordersData] =
          await Promise.all([
            getAdminStats(),
            getAllOrders(),
          ]);

        setStats(statsData.stats);

        const orders = ordersData.orders || [];

        setRecentOrders(orders.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="admin-main">
      <h1 className="dashboard-title">
        Dashboard
      </h1>

      {/* Statistics */}
      <div className="stats-grid">
        <StatCard
          title="Users"
          value={stats.totalUsers}
        />

        <StatCard
          title="Products"
          value={stats.totalProducts}
        />

        <StatCard
          title="Orders"
          value={stats.totalOrders}
        />

        <StatCard
          title="Revenue"
          value={`₹${stats.totalRevenue}`}
        />
      </div>

      {/* Recent Orders */}
      <div className="recent-orders">
        <h2>Recent Orders</h2>

        {recentOrders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr key={order._id}>
                  <td>
                    #{order._id.slice(-6)}
                  </td>

                  <td>
                    {order.user?.name ||
                      "Unknown"}
                  </td>

                  <td>
                    ₹{order.totalPrice}
                  </td>

                  <td>
                    {order.orderStatus}
                  </td>

                  <td>
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;