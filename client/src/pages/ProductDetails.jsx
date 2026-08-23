import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../services/productService";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";

import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);

        setProduct(data);

        if (data?.sizes?.length > 0) {
          setSelectedSize(data.sizes[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  if (loading) return <h2>Loading...</h2>;

  if (!product) return <h2>Product Not Found</h2>;

return (
  <section className="product-details section-p1">
    <ProductGallery
      images={product.images}
      name={product.name}
    />

    <ProductInfo
      product={product}
      quantity={quantity}
      setQuantity={setQuantity}
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
    />
    
  </section>
  
);  
};

export default ProductDetails;