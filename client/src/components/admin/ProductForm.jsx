import { useState } from "react";
import { uploadImage } from "../../services/uploadService";

const ProductForm = ({
  formData,
  handleChange,
  handleSubmit,
  buttonText,
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    setUploadError("");

    const invalidFile = files.find(
      (file) =>
        !file.type.startsWith("image/") ||
        file.size > 5 * 1024 * 1024
    );

    if (invalidFile) {
      setUploadError(
        "Only images smaller than 5MB are allowed."
      );
      return;
    }

    try {
      setUploading(true);

      const uploadedImages = [];

      for (const file of files) {
        const data = await uploadImage(file);

        uploadedImages.push({
          url: data.imageUrl,
          publicId: data.publicId,
        });
      }

      const newImages = [
        ...(formData.images || []),
        ...uploadedImages.map((image) => image.url),
      ];

      handleChange({
        target: {
          name: "images",
          value: newImages,
          type: "text",
        },
      });

      // Keep first image as primary image
      if (!formData.image && newImages.length > 0) {
        handleChange({
          target: {
            name: "image",
            value: newImages[0],
            type: "text",
          },
        });
      }
    } catch (error) {
      console.error(
        "Image Upload Error:",
        error
      );

      setUploadError(
        error.response?.data?.message ||
          "Image upload failed."
      );
    } finally {
      setUploading(false);

      // Allows selecting the same file again
      e.target.value = "";
    }
  };

  const removeImage = (index) => {
    const updatedImages = [
      ...(formData.images || []),
    ];

    updatedImages.splice(index, 1);

    handleChange({
      target: {
        name: "images",
        value: updatedImages,
        type: "text",
      },
    });

    // Update primary image
    handleChange({
      target: {
        name: "image",
        value: updatedImages[0] || "",
        type: "text",
      },
    });
  };

  return (
    <form
      className="admin-form"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full border p-3 rounded"
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <textarea
        className="w-full border p-3 rounded"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        className="w-full border p-3 rounded"
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        className="w-full border p-3 rounded"
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <input
        className="w-full border p-3 rounded"
        type="text"
        name="anime"
        placeholder="Anime"
        value={formData.anime}
        onChange={handleChange}
        required
      />

      {/* Multiple Images */}
      <div className="mt-4">
        <label className="block mb-2 font-semibold">
          Product Images
        </label>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          disabled={uploading}
        />

        {uploading && (
          <p className="mt-2">
            Uploading images...
          </p>
        )}

        {uploadError && (
          <p className="text-red-500 mt-2">
            {uploadError}
          </p>
        )}

        {/* Image Preview */}
        {formData.images?.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {formData.images.map(
              (image, index) => (
                <div
                  key={image}
                  className="relative"
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-32 h-32 object-cover rounded border"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeImage(index)
                    }
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-7 h-7"
                  >
                    ×
                  </button>

                  {index === 0 && (
                    <span className="block text-sm mt-1 text-center">
                      Main Image
                    </span>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>

      <input
        className="w-full border p-3 rounded"
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />

      <input
        className="w-full border p-3 rounded"
        type="text"
        name="sizes"
        placeholder="S,M,L,XL"
        value={formData.sizes}
        onChange={handleChange}
      />

      <label className="flex items-center gap-2 mb-4">
        Featured

        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />
      </label>

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded disabled:opacity-50"
        type="submit"
        disabled={
          uploading ||
          formData.images?.length === 0
        }
      >
        {uploading
          ? "Uploading..."
          : buttonText}
      </button>
    </form>
  );
};

export default ProductForm;