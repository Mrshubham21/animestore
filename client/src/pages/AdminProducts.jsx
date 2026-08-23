import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "../services/productService";
const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await deleteProduct(id);

    setProducts((prev) =>
      prev.filter(
        (product) => product._id !== id
      )
    );

    alert("Product deleted successfully");
  } catch (error) {
    console.log(error);
    alert("Failed to delete product");
  }
};
  return (
    <div className="admin-products">
      <div className="admin-header">
        <h1>Manage Products</h1>
        <Link
          to="/admin/products/add"
          className="add-btn"
        >
          Add Product
        </Link>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() =>
                    navigate(
                      `/admin/products/edit/${product._id}`
                    )
                  }
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;