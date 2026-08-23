import express from "express";

import {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.use(protect);

// Customer routes
router.post("/", createOrder);

router.get("/myorders", getMyOrders);

// Admin routes
router.get(
  "/admin/all",
  adminOnly,
  getAllOrders
);

router.put(
  "/admin/:id/status",
  adminOnly,
  updateOrderStatus
);

// Single order
router.get("/:id", getOrderById);

export default router;