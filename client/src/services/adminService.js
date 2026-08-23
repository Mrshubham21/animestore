import axios from "../services/axios";

export const getAdminStats = async () => {
  const { data } = await axios.get("/admin/stats");
  return data;
};