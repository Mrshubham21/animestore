import api from "./axios";

// Get all users - Admin
export const getAllUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

// Delete user - Admin
export const deleteUser = async (id) => {
  const { data } = await api.delete(`/users/${id}`);
  return data;
};