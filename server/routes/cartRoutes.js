import express from "express";

import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cartController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All cart routes require authentication
router.use(protect);

// Get logged-in user's cart
router.get("/", getCart);

// Add product to cart
router.post("/", addToCart);

// Update quantity
router.put("/:productId", updateCartItem);

// Remove item
router.delete("/:productId", removeFromCart);

// Clear entire cart
router.delete("/clear", clearCart);

export default router;