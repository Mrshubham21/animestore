import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Layout from "./components/layout/Layout";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Upcoming from "./pages/Upcoming";
import AnimeMerch from "./pages/AnimeMerch";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";
import Wishlist from "./pages/Wishlist";
import Dashboard from "./pages/Dashboard";
import AdminOrder from "./pages/AdminOrder";
import AdminProducts from "./pages/AdminProducts";
import AdminLayout from "./components/admin/AdminLayout";
import Userss from "./pages/Userss";
import AdminRoute from "./routes/AdminRoute";
import Profile from "./pages/Profile";
import AdminAddProduct from "./components/admin/AdminAddProduct";
import AdminEditProduct from "./pages/AdminEditProduct";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />

        <Route path="/anime-merch" element={<AnimeMerch />} />

        <Route path="/anime-merch/:id" element={<ProductDetails />} />

        <Route path="/upcoming" element={<Upcoming />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/terms" element={<Terms />} />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="products/add" element={<AdminAddProduct />} />
        <Route path="orders" element={<AdminOrder />} />
        <Route path="users" element={<Userss />} />
        <Route path="products/edit/:id" element={<AdminEditProduct />} />
      </Route>

      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />

      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />
    </Routes>
  );
}

export default App;
