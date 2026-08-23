import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProduct,
  updateProduct,
} from "../services/productService";

import ProductForm from "../components/admin/ProductForm";

const AdminEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    anime: "",
    image: "",
    stock: 0,
    sizes: "",
    featured: false,
    isNew: true,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);

        setFormData({
          name: data.name || "",
          description: data.description || "",
          price: data.price || "",
          category: data.category || "",
          anime: data.anime || "",
          image: data.images?.[0] || "",
          stock: data.stock || 0,
          sizes: data.sizes?.join(",") || "",
          featured: data.featured || false,
          isNew: data.isNew || false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, checked, type } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        ...formData,
        images: [formData.image],
        sizes: formData.sizes
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      await updateProduct(id, updatedData);

      alert("Product Updated");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Update Product"
      />
    </div>
  );
};

export default AdminEditProduct;