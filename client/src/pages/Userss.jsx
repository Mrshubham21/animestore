import { useEffect, useState } from "react";
import {
  getAllUsers,
  deleteUser,
} from "../services/userService";

const Userss = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Get Users Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    try {
      await deleteUser(id);

      setUsers((prev) =>
        prev.filter((user) => user._id !== id)
      );

      alert("User deleted successfully");
    } catch (error) {
      console.error("Delete User Error:", error);

      const message =
        error.response?.data?.message ||
        "Failed to delete user";

      alert(message);
    }
  };

  if (loading) {
    return (
      <div className="admin-products">
        <h1>Loading Users...</h1>
      </div>
    );
  }

  return (
    <div className="admin-products">
      <div className="admin-header">
        <h1>Manage Users</h1>
      </div>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={
                      user.role === "admin"
                        ? "admin-role"
                        : "user-role"
                    }
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(user._id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Userss;