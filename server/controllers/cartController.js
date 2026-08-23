import Cart from "../models/Cart.js";

// ======================= GET CART =======================
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    if (!cart) {
      cart = await Cart.create({
        user: req.user.id,
        items: [],
      });
    }

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Get Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================= ADD TO CART =======================
export const addToCart = async (req, res) => {
  console.log("========== POST /api/cart ==========");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  try {
    const { productId, quantity, size } = req.body;

    let cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      cart = await Cart.create({
        user: req.user.id,
        items: [],
      });
    }

    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.size === size
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
        size,
      });
    }

    await cart.save();

    const updatedCart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    res.status(200).json({
      success: true,
      message: "Item added to cart",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Add To Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity, size } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.size === size
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    item.quantity = quantity;

    await cart.save();

    const updatedCart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    res.status(200).json({
      success: true,
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Update Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const { size } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) =>
        !(
          item.product.toString() === productId &&
          item.size === size
        )
    );

    await cart.save();

    const updatedCart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    res.status(200).json({
      success: true,
      message: "Item removed",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Remove Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = [];

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart cleared",
    });
  } catch (error) {
    console.error("Clear Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};