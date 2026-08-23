import api from "./axios";

export const sendMessage = async (messageData) => {
  const { data } = await api.post("/contact", messageData);
  return data;
};