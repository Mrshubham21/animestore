import Wishlist from "../models/Wishlist.js";

/*
    @desc   Get User Wishlist
    @route  GET /api/wishlist
    @access Private
*/
export const getWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({
      user: req.user._id,
    }).populate("items.product");

    if (!wishlist) {
      wishlist = await Wishlist.create({
        user: req.user._id,
        items: [],
      });
    }

    // Remove invalid products
    wishlist.items = wishlist.items.filter(
      (item) => item.product !== null
    );

    await wishlist.save();

    res.status(200).json(wishlist);
  } catch (error) {
    console.error("Get Wishlist Error:", error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

/*
    @desc   Add Product To Wishlist
    @route  POST /api/wishlist
    @access Private
*/
export const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({
      user: req.user._id,
    });

    if (!wishlist) {
      wishlist = await Wishlist.create({
        user: req.user._id,
        items: [],
      });
    }

    const alreadyExists = wishlist.items.find(
      (item) => item.product.toString() === productId
    );

    if (alreadyExists) {
      return res.status(400).json({
        message: "Product already in wishlist",
      });
    }

    wishlist.items.push({
      product: productId,
    });

    await wishlist.save();

    await wishlist.populate("items.product");
    wishlist.items = wishlist.items.filter(
  (item) => item.product !== null
);

await wishlist.save();
    res.status(200).json(wishlist);
  } catch (error) {
    console.error("Add Wishlist Error:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

/*
    @desc   Remove Product From Wishlist
    @route  DELETE /api/wishlist/:productId
    @access Private
*/
export const removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      user: req.user._id,
    });

    if (!wishlist) {
      return res.status(404).json({
        message: "Wishlist not found",
      });
    }

    wishlist.items = wishlist.items.filter(
      (item) =>
        item.product.toString() !== req.params.productId
    );

    await wishlist.save();

    await wishlist.populate("items.product");
    wishlist.items = wishlist.items.filter(
  (item) => item.product !== null
);

await wishlist.save();

    res.status(200).json(wishlist);
  } catch (error) {
    console.error("Remove Wishlist Error:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};