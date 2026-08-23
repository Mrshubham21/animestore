import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Wait until authentication is restored
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but not an admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Admin
  return children;
};

export default AdminRoute;