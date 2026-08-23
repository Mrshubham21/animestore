import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `p-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `p-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `p-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `p-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Back to Store
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
