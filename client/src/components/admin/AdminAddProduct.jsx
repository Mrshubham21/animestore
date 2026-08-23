import { useState } from "react";
import { createProduct } from "../../services/productService";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/admin/ProductForm";
const AdminAddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    anime: "",
    image: "",
    images: [],
    stock: 0,
    sizes: "",
    featured: false,
    isNew: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.images.length === 0) {
    alert("Please upload at least one product image");
    return;
  }

  try {
    const productData = {
      ...formData,

      images: formData.images,

      sizes: formData.sizes
        .split(",")
        .map((size) => size.trim())
        .filter(Boolean),
    };

    await createProduct(productData);

    alert("Product Added Successfully");

    navigate("/admin/products");
  } catch (error) {
    console.log(error);
    alert("Failed to Add Product");
  }
};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Add Product"
      />
    </div>
  );
};

export default AdminAddProduct;
