import express from "express";
import {
  getDashboard,
  getAdminStats,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
const router = express.Router();

router.get("/dashboard", protect, adminOnly, getDashboard);

router.get("/stats", protect, adminOnly, getAdminStats);

router.get("/admin/all", adminOnly, getAllOrders);

router.put("/admin/:id/status", adminOnly, updateOrderStatus);
export default router;