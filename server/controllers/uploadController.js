import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "anime-store/products",
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Error:", error);

          return res.status(500).json({
            success: false,
            message: "Image upload failed",
          });
        }

        return res.status(200).json({
          success: true,
          imageUrl: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    streamifier
      .createReadStream(req.file.buffer)
      .pipe(uploadStream);
  } catch (error) {
    console.error("Upload Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};