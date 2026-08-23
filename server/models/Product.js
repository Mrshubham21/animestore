import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    // Pricing
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    originalPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    // Category
    category: {
      type: String,
      required: true,
      trim: true,
    },

    // Anime
    anime: {
      type: String,
      required: true,
      trim: true,
    },

    // Character
    character: {
      type: String,
      default: "",
      trim: true,
    },

    // Brand
    brand: {
      type: String,
      default: "Anime Store",
      trim: true,
    },

    // Product Images
    images: [
      {
        type: String,
        required: true,
      },
    ],

    // Available Sizes
    sizes: [
      {
        type: String,
        enum: ["S", "M", "L", "XL", "XXL"],
      },
    ],

    // Ratings
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    // Stock
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Homepage Featured
    featured: {
      type: Boolean,
      default: false,
    },

    // New Arrival
    isNew: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;