import { useEffect, useState } from "react";

const ProductGallery = ({ images = [], name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  useEffect(() => {
    setSelectedImage(images[0] || "");
  }, [images]);

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img
          src={selectedImage}
          alt={name}
          className="main-product-image"
          loading="lazy"
        />
      </div>

      {images.length > 1 && (
        <div className="thumbnail-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${name} ${index + 1}`}
              className={`thumbnail ${
                selectedImage === img ? "active-thumbnail" : ""
              }`}
              onClick={() => setSelectedImage(img)}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;